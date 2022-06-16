const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentController");

router.post('/:articleId', commentsController.createComment)
router.get('/:articleId', commentsController.getComments)
router.get('/:articleId/:commentId', commentsController.getCommentById)


module.exports = router