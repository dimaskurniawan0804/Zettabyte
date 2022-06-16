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


}

module.exports = Article