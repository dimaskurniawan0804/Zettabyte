const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get('/', articleController.findAllArticle);

module.exports = router