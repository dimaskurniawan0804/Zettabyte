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
}

module.exports = Comment