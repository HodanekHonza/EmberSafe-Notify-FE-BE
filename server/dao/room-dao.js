"use strict";
require('dotenv/config');
const client = require("../db/mongoDB");
//const { client } = require("../db/mongoDB.js");


class RoomDao {
  async createRoom(room) {
    try {
      await client.connect();
      const database = client.db("EmberNotifyDB");

      const roomCollection = database.collection("room");

      const result = await roomCollection.insertOne(room);

      console.log(`A document was inserted with the _id: ${result._id}`);

    } catch (e) {
      console.log(e)
    } finally {
      await client.close();
    }
  }


  async getRoom(typeOfRoomParam) {
    try {
      await client.connect();
      const database = client.db("EmberNotifyDB");
      const rooms = database.collection("room");
      const query = { typeOfRoom: typeOfRoomParam };
      const room = await rooms.findOne(query);
      return room;
    } catch (e) {
      console.log(e)
    }
    finally {
      await client.close();
    }
  }


  async updateRoom(typeOfRoom, temperature) {
    try {
      await client.connect();
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
    finally {
      await client.close();
    }
  }

  async deleteRoom(typeOfRoom) {
    try {
      await client.connect();
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
    finally {
      await client.close();
    }
  }

  async listRooms() {
    try {
      await client.connect();
      const database = client.db("EmberNotifyDB");
      const rooms = database.collection("room");
      const result = await rooms.find().toArray();
      return result;
    } catch (e) {
      console.log(e);
    } finally {
      await client.close();
    }
  }
}

module.exports = RoomDao;
