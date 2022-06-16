const errorHandler = async (error, req, res, next) => {
    switch (error.name) {
        case "No article found":
            res.status(404).json({ message: error.name })
            break;
        case "Update Article failed":
            res.status(404).json({ message: error.name })
            break;
        case "Title is required":
            res.status(404).json({ message: error.name })
            break;
        case "Content is required":
            res.status(404).json({ message: error.name })
            break;
        case "Images is required":
            res.status(404).json({ message: error.name })
            break;
        case "Author is required":
            res.status(404).json({ message: error.name })
            break;
        case "No comment found":
            res.status(404).json({ message: error.name })
            break;
        default:
            res.status(500).json({ message: 'Internal Server Error' })
            break
    }
}

module.exports = errorHandler