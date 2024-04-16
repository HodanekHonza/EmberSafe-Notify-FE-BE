const RoomDao = require("../../dao/room-dao");
const dao = new RoomDao();

async function ListAbl(req, res) {
  try {
    const rooms = await dao.listRooms();
    res.json(rooms);
    res.status(200)
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = ListAbl;
