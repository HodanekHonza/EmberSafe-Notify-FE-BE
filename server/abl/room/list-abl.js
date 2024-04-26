const RoomDao = require("../../dao/room-dao");
const dao = new RoomDao();

async function ListAbl(req, res) {
  try {
    const userId = req.params.userId;
    const rooms = await dao.listRooms(userId);
    res.json(rooms);
    res.status(200)
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = ListAbl;
