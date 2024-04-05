"use strict";
const fs = require("fs");
const path = require("path");

const crypto = require("crypto");

const rf = fs.promises.readFile;
const wf = fs.promises.writeFile;
const DEFAULT_STORAGE_PATH = path.join(__dirname, "storage", "rooms.json");

class RoomDao {
  constructor(storagePath) {
    this.roomStoragePath = storagePath ? storagePath : DEFAULT_STORAGE_PATH;
  }

  async createRoom(room) {
    let roomList = await this._loadAllRooms();
    const currentRoom = roomList.find(
      (item) => item.idOfRoom === room.idOfRoom
    );

    if (currentRoom) {
      throw `Room with id ${room.idOfRoom} already exists in db`;
    }
    // move this to abl
    room.id = crypto.randomBytes(8).toString("hex");

    roomList.push(room);

    await wf(this._getStorageLocation(), JSON.stringify(roomList, null, 2));

    return room;
  }

  async getRoom(id) {
    const roomlist = await this._loadAllRooms();
    const result = roomlist.find((video) => video.idOfRoom === id);
    return result;
  }

  async updateRoom(id, updates) {
    let roomlist = await this._loadAllRooms();
    const roomIndex = roomlist.findIndex((b) => b.idOfRoom === id);
    if (roomIndex < 0) {
      throw new Error(`Room with given id ${id} does not exist`);
    } else {
      // Update only the specified properties of the room
      roomlist[roomIndex] = {
        ...roomlist[roomIndex],
        ...updates,
      };
    }
    await wf(this._getStorageLocation(), JSON.stringify(roomlist, null, 2));
    return roomlist[roomIndex];
  }

  // async updateRoom(room) {
  //   let roomlist = await this._loadAllRooms();
  //   const roomIndex = roomlist.findIndex((b) => b.idOfRoom === room.idOfRoom);
  //   if (roomIndex < 0) {
  //     throw new Error(`Room with given id ${room.idOfRoom} does not exists`);
  //   } else {
  //     roomlist[roomIndex] = {
  //       ...roomlist[roomIndex],
  //       ...room,
  //     };
  //   }
  //   await wf(this._getStorageLocation(), JSON.stringify(roomlist, null, 2));
  //   return roomlist[roomIndex];
  // }

  async deleteRoom(id) {
    let roomList = await this._loadAllRooms();

    const roomIndex = roomList.findIndex((b) => b.idOfRoom === id);

    if (roomIndex >= 0) {
      roomList.splice(roomIndex, 1);
    } else {
      console.log("Room not found, cannot deleting.");
    }
    await wf(this._getStorageLocation(), JSON.stringify(roomList, null, 2));
    return {};
  }

  async listRooms() {
    let roomlist = await this._loadAllRooms();
    return roomlist;
  }

  async _loadAllRooms() {
    let roomlist;
    try {
      roomlist = JSON.parse(await rf(this._getStorageLocation()));
    } catch (e) {
      if (e.code === "ENOENT") {
        console.log(e);
        console.info("No storage found, initializing new one...");
        roomlist = [];
      } else {
        throw new Error(
          "Unable to read from storage. Wrong data format. " +
            this._getStorageLocation()
        );
      }
    }
    return roomlist;
  }

  _getStorageLocation() {
    return this.roomStoragePath;
  }
}

module.exports = RoomDao;
