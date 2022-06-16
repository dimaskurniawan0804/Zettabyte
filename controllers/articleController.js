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

    static async findArticleById(req, res, next) {
        const { id } = req.params
        try {
            const response = await Article.findArticleById(id)
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }

    static async createArticle(req, res, next) {
        const { title, content, images, author } = req.body
        try {
            const response = await Article.createArticle(title, content, images, author)
            res.status(200).json({ message: "Successfully created", id: response })
        } catch (error) {
            next(error)
        }
    }

    static async updateArticle(req, res, next) {
        const { id } = req.params
        const { title, content, images, author } = req.body
        try {
            const response = await Article.updateArticle(id, title, content, images, author)
            if (response === 1) {
                res.status(200).json({ message: "Successfully updated" })
            }
        } catch (error) {
            next(error)
        }
    }

    static async deleteArticle(req, res, next) {
        const { id } = req.params
        try {
            const response = await Article.deleteArticle(id)
            if (response === 1) {
                res.status(200).json({ message: "Successfully deleted" })
            }
        } catch (error) {
            next(error)
        }
    }

}

module.exports = articleController