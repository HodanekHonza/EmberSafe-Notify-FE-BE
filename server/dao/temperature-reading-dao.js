"use strict";
const fs = require("fs");
const path = require("path");

const crypto = require("crypto");

const rf = fs.promises.readFile;
const wf = fs.promises.writeFile;

const DEFAULT_STORAGE_PATH = path.join(
  __dirname,
  "storage",
  "temperature-readings.json"
);

class TemperatureReadingDao {
  constructor(storagePath) {
    this.temperatureStoragePath = storagePath
      ? storagePath
      : DEFAULT_STORAGE_PATH;
  }

  async createTemperatureReading(reading) {
    let readingList = await this._loadAllTemperatureReadings();
    const currentReading = readingList.find(
      (item) => item.id === reading.id
    );

    if (currentReading) {
      throw `Temperature reading for device with id ${reading.id} already exists in db`;
    }

    //reading.id = crypto.randomBytes(8).toString("hex");

    readingList.push(reading);

    await wf(this._getStorageLocation(), JSON.stringify(readingList, null, 2));

    return reading;
  }

  async getTemperatureReading(id) {
    const readingList = await this._loadAllTemperatureReadings();
    const result = readingList.find((reading) => reading.id === id);
    return result;
  }

  async updateTemperatureReading(reading) {
    let readingList = await this._loadAllTemperatureReadings();
    const readingIndex = readingList.findIndex((b) => b.id === reading.id);
    if (readingIndex < 0) {
      throw new Error(
        `Temperature reading with given id ${reading.id} does not exist`
      );
    } else {
      readingList[readingIndex] = {
        ...readingList[readingIndex],
        ...reading,
      };
    }
    await wf(this._getStorageLocation(), JSON.stringify(readingList, null, 2));
    return readingList[readingIndex];
  }

  async deleteTemperatureReading(id) {
    let readingList = await this._loadAllTemperatureReadings();

    const readingIndex = readingList.findIndex((b) => b.id === id);

    if (readingIndex >= 0) {
      readingList.splice(readingIndex, 1);
    } else {
      console.log("Temperature reading not found, cannot delete.");
    }
    await wf(this._getStorageLocation(), JSON.stringify(readingList, null, 2));
    return {};
  }

  async listTemperatureReadings() {
    let readingList = await this._loadAllTemperatureReadings();
    return readingList;
  }

  async _loadAllTemperatureReadings() {
    let readingList;
    try {
      readingList = JSON.parse(await rf(this._getStorageLocation()));
    } catch (e) {
      if (e.code === "ENOENT") {
        console.info("No storage found, initializing new one...");
        readingList = [];
      } else {
        throw new Error(
          "Unable to read from storage. Wrong data format. " +
            this._getStorageLocation()
        );
      }
    }
    return readingList;
  }

  _getStorageLocation() {
    return this.temperatureStoragePath;
  }
}

module.exports = TemperatureReadingDao;
