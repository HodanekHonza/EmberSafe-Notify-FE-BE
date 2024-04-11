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
  },
  //required: ["temp"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
  try {
    const ajv = new Ajv();
    const valid = ajv.validate(schema, req.body);
    if (valid) {
      let reading = req.body;
      reading.timeStamp = new Date();
      // //topic looks like this:  "node/skeleton:Living Room/thermometer/0:1/temperature";
      // const parts = req.body.topic.split(":")[1].split("/"); // Split by ":", get the second part, then split by "/"
      // const livingRoomPart = parts[0]; // Get the first element after splitting by "/"
      // console.log(livingRoomPart); 

      reading = await dao.createTemperatureReading(reading);
      roomDao.updateRoom(req.body.typeOfRoom, req.body.temp);
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
    if (e.includes("Temperature reading for device with id")) {
      res.status(400).send({ errorMessage: e, params: req.body });
    } else {
      res.status(500).send(e);
    }
  }
}

module.exports = CreateAbl;
