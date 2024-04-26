"use strict";
require('dotenv/config');
const client = require("../db/mongoDB");
const {ObjectId} = require("mongodb");

class TemperatureReadingDao {

  async createTemperatureReading(reading) {
    console.log(reading)
    try {
      const database = client.db("EmberNotifyDB");
      const roomCollection = database.collection("temperature-reading");
      const result = await roomCollection.insertOne(reading);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  async listTemperatureReadings(typeOfRoom, date) {
    try {
      const database = client.db("EmberNotifyDB");
      const allReadings = database.collection("temperature-reading");
      const endOfDay = new Date(date);

      endOfDay.setHours(23, 59, 59, 999);

      const query = {
        typeOfRoom: typeOfRoom,
        timeStamp: {
          $gte: date,
          // + "T00:00:00.000Z"
          $lt: endOfDay.toISOString()
        }
      };

      const projection = {
        timeStamp: 1,
        lastKnownTemperature: 1,
        _id: 0
      };

      const wantedReadings = await allReadings.find(query).project(projection).toArray();

      return wantedReadings;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = TemperatureReadingDao;
