"use strict";
require('dotenv/config');
const client = require("../db/mongoDB");
const {clerkClient} = require('@clerk/clerk-sdk-node');
const {ObjectId} = require("mongodb");

class RoomDao {
    async createRoom(room) {
        try {
            const database = client.db("EmberNotifyDB");
            const roomCollection = database.collection("room");
            const result = await roomCollection.insertOne(room);

            const insertedId = result.insertedId;
            const insertedIdString = insertedId.toString();

            const user = await clerkClient.users.getUser(room.userId);
            const existingRoomIds = user.privateMetadata && user.privateMetadata.roomIds ? user.privateMetadata.roomIds : [];

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


    async getRoom(roomId) {
        try {
            const database = client.db("EmberNotifyDB");
            const rooms = database.collection("room");
            const query = {_id: new ObjectId(roomId)};
            return await rooms.findOne(query);
        } catch (e) {
            console.log(e)
        }

    }


    async updateRoom(roomId, room) {
        console.log("updating room temp")
        try {
            const database = client.db("EmberNotifyDB");
            const movies = database.collection("room");
            const filter = {_id: new ObjectId(roomId)};
            const updateDoc = {
                $set: {
                    typeOfRoom: room.typeOfRoom,
                    thresholds: room.thresholds,
                    photoOfRoom: room.photoOfRoom
                },
            };

            const result = await movies.updateOne(filter, updateDoc);

            console.log(`${result.matchedCount} document(s) ${roomId}  matched the filter, updated ${result.modifiedCount} document(s)`,);
            return result;
        } catch (e) {
            console.log(e);
        }

    }


    async updateRoomTemperature(roomId, temperature) {
        console.log("updating room temp")
        try {
            const database = client.db("EmberNotifyDB");
            const movies = database.collection("room");
            const filter = {_id: new ObjectId(roomId)};

            const updateDoc = {
                $set: {
                    lastKnownTemperature: temperature,
                },
            };

            const result = await movies.updateOne(filter, updateDoc);

            console.log(`${result.matchedCount} document(s) ${roomId}  matched the filter, updated ${result.modifiedCount} document(s)`,);
            return result;
        } catch (e) {
            console.log(e);
        }

    }

// add deleting private metadata, we dont need to keep old ids of rooms
    async deleteRoom(roomId, userId) {
        try {
            const database = client.db("EmberNotifyDB");
            const rooms = database.collection("room");
            const filter = {_id: new ObjectId(roomId)};
            const result = await rooms.findOneAndDelete(filter);
            const user = await clerkClient.users.getUser(userId);

            const updatedRoomIds = user.privateMetadata.roomIds.filter(id => id !== roomId);
            console.log("LIST OF IDS NOW " + updatedRoomIds)

            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    roomIds: updatedRoomIds
                }
            });
            console.log(`A document was inserted with the _id: ${result}`);
            if (result) {
                console.log(`${roomId} deleted`);
            }
            return result;
        } catch (e) {
            console.log(e);
        }

    }

    async listRooms(userId) {
        try {
            const user = await clerkClient.users.getUser(userId);
            const roomIds = user.privateMetadata.roomIds.map(id => new ObjectId(id));
            const database = client.db("EmberNotifyDB");
            return await database.collection("room").find({_id: {$in: roomIds}}).toArray();
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = RoomDao;
