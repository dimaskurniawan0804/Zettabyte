if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const express = require("express");
const { connection } = require("../Zettabyte/config/index");
const app = express();
const port = process.env.PORT;
const router = require("../Zettabyte/routes/index");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

connection()
    .then(() => {
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(error);
    })

module.exports = app;
