const { MongoClient } = require("mongodb");
require('dotenv/config');
const connectionString = process.env.MONGO_URI;
const client = new MongoClient(connectionString);


async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB server");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

connectToDatabase();

module.exports = client;
