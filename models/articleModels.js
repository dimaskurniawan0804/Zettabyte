const { getDB } = require('../../Zettabyte/config/index');
const { ObjectId } = require('mongodb');

class Article {
    static article() {
        const database = getDB()
        return database.collection('articles')
    }
    static async findAllArticle(sort = 'title', sortType = 'asc', filter, pageNumber) {
        console.log(filter);
        try {
            if (sortType === 'asc') {
                sortType = 1
            } else {
                sortType = -1
            }
            if (!filter) {
                const database = getDB()
                const allArticle = await database.collection('articles').
                    find()
                    .sort({ [sort]: sortType })
                    .skip(pageNumber > 0 ? ((pageNumber - 1) * 2) : 0)
                    .limit(2)
                    .toArray()
                if (allArticle.length === 0) {
                    throw {
                        name: 'No article found'
                    }
                }
                return allArticle
            } else {
                const database = getDB()
                const allArticle = await database.collection('articles')
                    .aggregate([
                        { $match: { author: filter } },
                        { $sort: { [sort]: sortType } },
                        { $skip: pageNumber > 0 ? ((pageNumber - 1) * 2) : 0 },
                        { $limit: 2 }
                    ]).toArray()
                return allArticle
            }

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    static async findArticleById(id) {
        try {
            const article = await this.article().findOne({ _id: ObjectId(id) })
            if (!article) {
                throw {
                    name: 'No article found'
                }
            }
            return article
        } catch (error) {
            throw error
        }
    }

    static async createArticle(title, content, images, author) {
        try {
            if (!title) {
                throw {
                    name: 'Title is required'
                }
            }
            if (!content) {
                throw {
                    name: 'Content is required'
                }
            }
            if (!images) {
                throw {
                    name: 'Images is required'
                }
            }
            if (!author) {
                throw {
                    name: 'Author is required'
                }
            }
            const newArticle = await this.article().insertOne({ title, content, images, author })
            console.log(newArticle);
            return newArticle.insertedId
        } catch (error) {
            throw error
        }
    }

}

module.exports = Article