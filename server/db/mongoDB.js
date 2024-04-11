const { MongoClient } = require("mongodb");
require('dotenv/config');
const connectionString = process.env.MONGO_URI;
const client = new MongoClient(connectionString);

module.exports = client;
