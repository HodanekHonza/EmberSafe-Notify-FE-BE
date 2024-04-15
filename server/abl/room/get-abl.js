const Ajv = require("ajv").default;
const RoomDao = require("../../dao/room-dao");
let dao = new RoomDao();

const schema = {
  type: "object",
  properties: {
    typeOfRoom: { type: "string" },
  },
  required: ["typeOfRoom"],
};

async function GetAbl(req, res) {
  const roomType = req.params.typeOfRoom;
  try {
    const ajv = new Ajv();
    const valid = ajv.validate(schema, req.body);
    if (true) {
      const room = await dao.getRoom(roomType);
      console.log(room)
      if (!room) {
        res
          .status(400)
          .send({ error: `Room with type name '${roomType}' doesn't exist.` });
      }
      res.json(room);
    } else {
      res.status(400).send({
        errorMessage: "validation of input failed",
        params: body,
        reason: ajv.errors,
      });
    }
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = GetAbl;
