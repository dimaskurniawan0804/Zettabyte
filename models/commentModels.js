const { getDB } = require('../config/index');
const { ObjectId } = require('mongodb');

class Comment {
    static comment() {
        const database = getDB()
        return database.collection('comments')
    }
    static article() {
        const database = getDB()
        return database.collection('articles')
    }

    static async getCommentsByArticle(articleId) {
        try {
            const comments = await this.comment().find({ articleId }).toArray()
            return comments
        } catch (error) {
            throw error
        }
    }
    static async getCommentById(articleId, id) {
        try {
            const article = await this.article().findOne({ _id: ObjectId(articleId) })
            if (!article) {
                throw {
                    name: 'No article found'
                }
            }
            const comment = await this.comment().findOne({ _id: ObjectId(id), articleId })
            if (!comment) {
                throw {
                    name: 'No comment found'
                }
            }
            return comment
        } catch (error) {
            throw error
        }
    }
    static async createComment(articleId, comment) {
        try {
            const article = await this.article().findOne({ _id: ObjectId(articleId) })
            if (!article) {
                throw {
                    name: 'No article found'
                }
            } else {
                const newComment = await this.comment().insertOne({
                    articleId,
                    name: comment.name,
                    text: comment.text,
                })
                return newComment
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = Comment