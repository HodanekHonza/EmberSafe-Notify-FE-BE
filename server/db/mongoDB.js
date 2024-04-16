const { MongoClient } = require("mongodb");
require('dotenv/config');
const connectionString = process.env.MONGO_URI;
const client = new MongoClient(connectionString);

// Connect the client to the MongoDB server
async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB server");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

// Call the connectToDatabase function to establish connection
connectToDatabase();

module.exports = client;
