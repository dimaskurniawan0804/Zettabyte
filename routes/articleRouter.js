const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get('/', articleController.findAllArticle);
router.get('/:id', articleController.findArticleById);
router.post('/', articleController.createArticle);

module.exports = router