"use strict";
require('dotenv/config');
const client = require("../db/mongoDB");
const { clerkClient } = require('@clerk/clerk-sdk-node');
class RoomDao {
  async createRoom(room) {
    try {
      const database = client.db("EmberNotifyDB");
      const roomCollection = database.collection("room");
      const result = await roomCollection.insertOne(room);


      // Retrieve the MongoDB ObjectId of the inserted document
      const insertedId = result.insertedId;
      const insertedIdString = insertedId.toString();
      // Fetch the user's existing private metadata
      const user = await clerkClient.users.getUser(room.userId);
      const existingRoomIds = user.privateMetadata && user.privateMetadata.roomIds ? user.privateMetadata.roomIds : [];

      // Append the new roomId to the existing array of roomIds
      const updatedRoomIds = [...existingRoomIds, insertedIdString];
      console.log("LIST OF IDS NOW " + updatedRoomIds)


      await clerkClient.users.updateUserMetadata(room.userId, {
        privateMetadata: {
          roomIds: updatedRoomIds
        }
      });
      console.log(`A document was inserted with the _id: ${result}`);
      return result;
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


  async updateRoom(typeOfRoom, room) {
    console.log("updating room temp")
    try {
      const database = client.db("EmberNotifyDB");
      const movies = database.collection("room");
      const filter = { typeOfRoom: typeOfRoom };

      const updateDoc = {
        $set: {
          typeOfRoom: room.typeOfRoom,
          thresholds: room.thresholds,
          photoOfRoom: room.photoOfRoom
        },
      };

      const result = await movies.updateOne(filter, updateDoc);

      console.log(`${result.matchedCount} document(s) ${typeOfRoom}  matched the filter, updated ${result.modifiedCount} document(s)`,);
      return result;
    } catch (e) {
      console.log(e);
    }

  }


  async updateRoomTemperature(typeOfRoom, temperature) {
    console.log("updating room temp")
    try {
      const database = client.db("EmberNotifyDB");
      const movies = database.collection("room");
      const filter = { typeOfRoom: typeOfRoom };

      const updateDoc = {
        $set: {
          lastKnownTemperature: temperature,
        },
      };

      const result = await movies.updateOne(filter, updateDoc);

      console.log(`${result.matchedCount} document(s) ${typeOfRoom}  matched the filter, updated ${result.modifiedCount} document(s)`,);
      return result;
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
        console.log(`${typeOfRoom} deleted`);
      }// else {
      //   throw new "ROOM NOT FOUND";
      // }
      return result;
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
