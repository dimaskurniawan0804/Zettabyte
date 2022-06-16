const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get('/', articleController.findAllArticle);
router.post('/', articleController.createArticle);
router.put('/:id', articleController.updateArticle);
router.get('/:id', articleController.findArticleById);

module.exports = router