
const RoomDao = require("../../dao/room-dao");
let dao = new RoomDao();

async function DeleteAbl(req, res) {
  try {
    const roomId = req.params.roomId;
    const userId = req.params.userId;

    await dao.deleteRoom(roomId, userId);
    res.status(200)
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = DeleteAbl;
