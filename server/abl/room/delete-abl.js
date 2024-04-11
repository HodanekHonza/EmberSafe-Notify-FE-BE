const path = require("path");
const RoomDao = require("../../dao/room-dao");
let dao = new RoomDao(
  path.join(__dirname, "..", "..", "storage", "rooms.json")
);

async function DeleteAbl(req, res) {
  try {
    const roomType = req.params.typeOfRoom;
    await dao.deleteRoom(roomType);
    res.status(200)
    
    //res.json({});

  } catch (e) {
    res.status(500).send(e.message);
  }
}

module.exports = DeleteAbl;
