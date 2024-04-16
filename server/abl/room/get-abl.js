const RoomDao = require("../../dao/room-dao");
const dao = new RoomDao();


async function GetAbl(req, res) {
  const roomType = req.params.typeOfRoom;
  try {
    const room = await dao.getRoom(roomType);
    console.log(room)
    res.json(room);
    res.status(200)
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = GetAbl;
