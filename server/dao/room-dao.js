"use strict";
require('dotenv/config');
const client = require("../db/mongoDB");

class RoomDao {
  async createRoom(room) {
    try {

      const database = client.db("EmberNotifyDB");

      const roomCollection = database.collection("room");

      const result = await roomCollection.insertOne(room);

      console.log(`A document was inserted with the _id: ${result._id}`);

    } catch (e) {
      console.log(e)
    }
  }


  async getRoom(typeOfRoomParam) {
    try {

      const database = client.db("EmberNotifyDB");
      const rooms = database.collection("room");
      const query = { typeOfRoom: typeOfRoomParam };
      const room = await rooms.findOne(query);
      return room;
    } catch (e) {
      console.log(e)
    }

  }


  async updateRoomTemperature(typeOfRoom, temperature) {
    try {

      const database = client.db("EmberNotifyDB");
      const movies = database.collection("room");

      const filter = { typeOfRoom: typeOfRoom };

      const updateDoc = {
        $set: {
          lastKnownTemperature: temperature
        },
      };

      const result = await movies.updateOne(filter, updateDoc);

      console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,);
    } catch (e) {
      console.log(e);
    }

  }

  async deleteRoom(typeOfRoom) {
    try {
      const database = client.db("EmberNotifyDB");
      const rooms = database.collection("room");

      const filter = { typeOfRoom: typeOfRoom };

      const result = await rooms.findOneAndDelete(filter);
      if (result) {
        console.log("ROOM DELETED");
      } else {
        throw new "ROOM NOT FOUND";
      }
    } catch (e) {
      console.log(e);
    }

  }

  async listRooms() {
    try {
      const database = client.db("EmberNotifyDB");
      const rooms = database.collection("room");
      const result = await rooms.find().toArray();
      return result;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = RoomDao;
