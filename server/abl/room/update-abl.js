const Ajv = require("ajv").default;
const RoomDao = require("../../dao/room-dao");
const dao = new RoomDao();

const schema = {
  type: "object",
  properties: {
    idOfDevice: { type: "string" },
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
};

async function UpdateAbl(req, res) {
  try {
    const ajv = new Ajv();
    let room = req.body;
    const valid = ajv.validate(schema, room);
    if (valid) {
      room = await dao.updateRoomTemperature(room.typeOfRoom, room.lastKnownTemperature);
      res.json(room);
      res.status(200)
    } else {
      res.status(400).send({
        errorMessage: "validation of input failed",
        params: room,
        reason: ajv.errors,
      });
    }
  } catch (e) {
    if (e.message.startsWith("Room with given type")) {
      res.status(400).json({ error: e.message });
    }
    res.status(500).send(e);
  }
}

module.exports = UpdateAbl;
