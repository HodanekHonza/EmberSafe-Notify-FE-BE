const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv/config');
const mongouri = process.env.MONGO_URI;

const client = new MongoClient(mongouri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = { client };
