"use strict";
require('dotenv/config');
const client = require("../db/mongoDB");

class TemperatureReadingDao {

  async createTemperatureReading(reading) {
    try {
      await client.connect();
      const database = client.db("EmberNotifyDB");

      const roomCollection = database.collection("temperature-reading");

      const result = await roomCollection.insertOne(reading);

      console.log(`A document was inserted with the _id: ${result._id}`);

    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }

  async listTemperatureReadings(typeOfRoom) {
    try {
      await client.connect();
      const database = client.db("EmberNotifyDB");
      const allReadings = database.collection("temperature-reading");
      const query = { typeOfRoom: typeOfRoom };
      const wantedReadings = await allReadings.find(query).toArray();
      return wantedReadings;
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
}

module.exports = TemperatureReadingDao;
