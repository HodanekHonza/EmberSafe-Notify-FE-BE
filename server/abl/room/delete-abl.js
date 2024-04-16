
const RoomDao = require("../../dao/room-dao");
let dao = new RoomDao();

async function DeleteAbl(req, res) {
  try {
    const roomType = req.params.typeOfRoom;
    await dao.deleteRoom(roomType);
    res.status(200)
  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = DeleteAbl;
