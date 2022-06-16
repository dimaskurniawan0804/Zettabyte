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
}

module.exports = commentsController