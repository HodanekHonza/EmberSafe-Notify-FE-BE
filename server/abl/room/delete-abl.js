const path = require("path");
const RoomDao = require("../../dao/room-dao");
let dao = new RoomDao(
    path.join(__dirname, "..", "..", "storage", "rooms.json")
);

async function DeleteAbl(req, res) {
    try {
        const roomId = req.params.id;
        await dao.deleteRoom(roomId);
        res.json({});
    } catch (e) {
        res.status(500).send(e.message);
    }
}

module.exports = DeleteAbl;
