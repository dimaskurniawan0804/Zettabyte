const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/commentController");

router.get('/:articleId', commentsController.getComments)

module.exports = router