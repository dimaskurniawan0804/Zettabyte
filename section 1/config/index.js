const { MongoClient } = require("mongodb");

let uri = process.env.URI_MONGO_DB;

const client = new MongoClient(uri);

let db;
async function connection() {
    try {
        await client.connect();
        db = client.db("zettaByte_backendTest");
    } catch (error) {
        console.log(error, "!!! ERROR CONNECTION.JS_SERVER-USER-CONFIG !!!");
    }
}

function getDB() {
    return db;
}

module.exports = { connection, getDB };
