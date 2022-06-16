const express = require("express");
const router = express.Router();
const articleRouter = require('../routes/articleRouter');
const commentRouter = require('../routes/commentRouter');

router.use("/articles", articleRouter)
// router.use("/comments", commentRouter)

module.exports = router;
