"use strict";
const fs = require("fs");
const path = require("path");

const crypto = require("crypto");

const rf = fs.promises.readFile;
const wf = fs.promises.writeFile;

const DEFAULT_STORAGE_PATH = path.join(__dirname, "storage", "rooms.json");

class RoomDao {
  constructor(storagePath) {
    this.videoStoragePath = storagePath ? storagePath : DEFAULT_STORAGE_PATH;
  }

  async createRoom(room) {
    
}


  async getRoom(id) {
  }

  async updateRoom(room) {
  }

  async deleteRoom(id) {
  }
  
// mabye not needed 
  async listRooms() {
  }

  async _loadAllVideos() {
  }

  _getStorageLocation() {
  }
}

module.exports = RoomDao;