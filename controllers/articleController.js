const Article = require('../models/articleModels');

class articleController {
    static async findAllArticle(req, res, next) {
        const { sort, sortType, filter, pageNumber } = req.query
        try {
            const response = await Article.findAllArticle(sort, sortType, filter, pageNumber)
            res.status(200).json(response)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = articleController