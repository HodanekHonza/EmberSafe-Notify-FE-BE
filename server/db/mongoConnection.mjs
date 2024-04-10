

import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config';
const mongouri = process.env.MONGO_URI;

const client = new MongoClient(mongouri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export { client };

