const path = require("path");
const Ajv = require("ajv").default;
const RoomDao = require("../../dao/room-dao");
let dao = new RoomDao(
  path.join(__dirname, "..", "..", "storage", "rooms.json")
);

let schema = {
  type: "object",
  properties: {},
  required: [],
};

async function ListAbl(req, res) {
  try {
    const rooms = await dao.listRooms();
    res.json(rooms);
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = ListAbl;
