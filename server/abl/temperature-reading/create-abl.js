const path = require("path");
const Ajv = require("ajv").default;
const crypto = require("crypto");
const TemperatureReadingDao = require("../../dao/temperature-reading-dao");
let dao = new TemperatureReadingDao(
  path.join(__dirname, "..", "..", "storage", "temperature-readings.json")
);

const schema = {
  type: "object",
  properties: {
    temp: { type: "number" },
  },
  required: ["temp"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
  try {
    const ajv = new Ajv();
    const valid = ajv.validate(schema, req.body);
    if (valid) {
      let reading = req.body;
      console.log(reading);
      reading.id = crypto.randomBytes(8).toString("hex");
      reading.timeStamp = new Date();
      reading = await dao.createTemperatureReading(reading);
      res.status(200);
      res.json(reading);
    } else {
      console.log("NOT WORKING VALID");
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
