const Ajv = require("ajv").default;
const RoomDao = require("../../dao/room-dao");
const TemperatureReadingDao = require("../../dao/temperature-reading-dao");
require('dotenv/config');
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);


const temperatureDao = new TemperatureReadingDao();
const roomDao = new RoomDao();

const schema = {
  type: "object",
  properties: {
    temp: { type: "number" },
    typeOfRoom: { type: "string" },
    timeStamp: { type: "string" },
  },
  required: ["temp", "typeOfRoom", "timeStamp"],
  additionalProperties: false,
};

let previousThresholds = {}; // Dictionary to store previous thresholds for each room

async function CreateAbl(req, res) {
  try {
    const ajv = new Ajv();
    const valid = ajv.validate(schema, req.body);
    if (valid) {
      let reading = req.body;
      const temp = req.body.temp;
      await temperatureDao.createTemperatureReading(reading);
      await roomDao.updateRoomTemperature(req.body.typeOfRoom, req.body.temp);
      const temperatureRoomCheck = await roomDao.getRoom(req.body.typeOfRoom);
      const temperatureTreshholds = temperatureRoomCheck.thresholds;
      let temperatureMatchedThreshold = null;

      for (const [thresholdName, thresholdValues] of Object.entries(temperatureTreshholds)) {
        const { low, high } = thresholdValues;
        if (temp >= low && temp <= high) {
          temperatureMatchedThreshold = thresholdName;
          break;
        }
      }

      if (temperatureMatchedThreshold !== null) {
        const previousThreshold = previousThresholds[req.body.typeOfRoom]; // Get previous threshold for the current room
        if (temperatureMatchedThreshold !== previousThreshold) {
          console.log(`Temperature (${temp}) falls within ${temperatureMatchedThreshold} threshold.`);
          client.messages
            .create({
              body: `EmberNotifty --- threshold reached: ${temperatureMatchedThreshold}`,
              from: '+13202881651',
              to: '+420702004704'
            })
            .then(message => console.log(message.sid))
            .catch(error => console.error(error));
          previousThresholds[req.body.typeOfRoom] = temperatureMatchedThreshold; // Update previous threshold for the current room
        } else {
          console.log(`Temperature (${temp}) falls within the same threshold as before.`);
        }
      } else {
        console.log(`Temperature (${temp}) does not fall within any threshold range.`);
        previousThresholds[req.body.typeOfRoom] = null; // Reset previous threshold for the current room
      }
      res.status(200);
      res.json(reading);
    } else {
      res.status(400).send({
        errorMessage: "Validation of input failed",
        params: req.body,
        reason: ajv.errors,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

module.exports = CreateAbl;
