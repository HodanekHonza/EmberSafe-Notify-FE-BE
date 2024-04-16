const Ajv = require("ajv").default;
const RoomDao = require("../../dao/room-dao");
const dao = new RoomDao();

const schema = {
  type: "object",
  properties: {
    idOfDevice: { type: "string" },
    idOfRoom: { type: "string" },
    lastKnownTemperature: { type: "number" },
    thresholds: {
      type: "object",
      properties: {
        thresholdCold: {
          type: "object",
          properties: {
            low: { type: "number" },
            high: { type: "number" },
          },
          required: ["low", "high"],
        },
        thresholdNormal: {
          type: "object",
          properties: {
            low: { type: "number" },
            high: { type: "number" },
          },
          required: ["low", "high"],
        },
        thresholdHot: {
          type: "object",
          properties: {
            low: { type: "number" },
            high: { type: "number" },
          },
          required: ["low", "high"],
        },
        thresholdDanger: {
          type: "object",
          properties: {
            low: { type: "number" },
            high: { type: "number" },
          },
          required: ["low", "high"],
        },
      },
      required: [
        "thresholdCold",
        "thresholdNormal",
        "thresholdHot",
        "thresholdDanger",
      ],
    },
    typeOfRoom: { type: "string" },
  },
  required: ["idOfDevice", "lastKnownTemperature", "thresholds", "typeOfRoom"],
  additionalProperties: false,
};

async function CreateAbl(req, res) {
  
  try {
    const ajv = new Ajv();
    const valid = ajv.validate(schema, req.body);
    if (valid) {
      let room = req.body;
      room = await dao.createRoom(room);
      res.json(room);
      res.status(200);
    } else {
      res.status(400).send({
        errorMessage: "validation of input failed",
        params: req.body,
        reason: ajv.errors,
      });
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = CreateAbl;
