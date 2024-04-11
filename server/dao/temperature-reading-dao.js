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
      console.log(e)
    } finally {
      await client.close();
    }
  }

  async getTemperatureReading(id) {

  }

  async updateTemperatureReading(reading) {

  }

  async deleteTemperatureReading(id) {

  }

  async listTemperatureReadings() {
  }
}

module.exports = TemperatureReadingDao;
