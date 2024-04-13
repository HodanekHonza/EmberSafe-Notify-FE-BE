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

let previousThreshold = null; // Declare previousThreshold outside the function

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
        if (temperatureMatchedThreshold !== previousThreshold) {
          console.log(`Temperature (${temp}) falls within ${temperatureMatchedThreshold} threshold.`);
          client.messages
            .create({
              body: `EmberNotifty --- treshold: ${temperatureMatchedThreshold}`,
              from: '+13202881651',
              to: '+420702004704'
            })
            .then(message => console.log(message.sid))
            .catch(error => console.error(error));
          previousThreshold = temperatureMatchedThreshold;
        } else {
          console.log(`Temperature (${temp}) falls within the same threshold as before.`);
        }
      } else {
        console.log(`Temperature (${temp}) does not fall within any threshold range.`);
        previousThreshold = null;
      }

      console.log(temperatureRoomCheck.thresholds);
      res.status(200);
      res.json(reading);
    } else {
      console.log("NOT WORKING VALIDATION");
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


module.exports = CreateAbl;
