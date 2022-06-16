const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentController");

router.post('/:articleId', commentsController.createComment)
router.put('/:articleId/:commentId', commentsController.updateComment)
router.get('/:articleId', commentsController.getComments)
router.get('/:articleId/:commentId', commentsController.getCommentById)


module.exports = router