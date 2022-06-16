const Comment = require('../models/commentModels');


class commentsController {
    static async getComments(req, res, next) {
        try {
            const comments = await Comment.getCommentsByArticle(req.params.articleId);
            res.status(200).json(comments);
        } catch (error) {
            next(error);
        }
    }
    static async getCommentById(req, res, next) {
        try {
            const comment = await Comment.getCommentById(req.params.articleId, req.params.commentId);
            res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    }
    static async createComment(req, res, next) {
        try {
            const comment = await Comment.createComment(req.params.articleId, req.body);
            res.status(201).json({ mssage: 'Comment created successfully' });
        } catch (error) {
            next(error);
        }
    }
    static async updateComment(req, res, next) {
        try {
            const comment = await Comment.updateComment(req.params.articleId, req.params.commentId, req.body);
            res.status(200).json({ message: 'Comment updated successfully' });
        } catch (error) {
            next(error);
        }
    }
    static async deleteComment(req, res, next) {
        try {
            const comment = await Comment.deleteComment(req.params.commentId);
            res.status(200).json({ message: 'Comment deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = commentsController