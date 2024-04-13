const Ajv = require("ajv").default;
const RoomDao = require("../../dao/room-dao");
const TemperatureReadingDao = require("../../dao/temperature-reading-dao");
const dao = new TemperatureReadingDao();

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

async function CreateAbl(req, res) {
  try {
    const ajv = new Ajv();
    const valid = ajv.validate(schema, req.body);
    if (valid) {
      let reading = req.body;
      await dao.createTemperatureReading(reading);
      roomDao.updateRoomTemperature(req.body.typeOfRoom, req.body.temp);
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
    console.log(e)
    res.status(500).send(e);
  }
}

module.exports = CreateAbl;
