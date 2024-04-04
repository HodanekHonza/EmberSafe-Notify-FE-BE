const path = require("path");
const Ajv = require("ajv").default;
const RoomDao = require("../../dao/room-dao");
let dao = new RoomDao(
  path.join(__dirname, "..", "..", "storage", "rooms.json")
);

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
      res.status(200);
      res.json(room);
    } else {
      res.status(400).send({
        errorMessage: "validation of input failed",
        params: req.body,
        reason: ajv.errors,
      });
    }
  } catch (e) {
    if (e.includes("Room with id")) {
      res.status(400).send({ errorMessage: e, params: req.body });
    } else {
      res.status(500).send(e);
    }
  }
}

module.exports = CreateAbl;
