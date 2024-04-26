const RoomDao = require("../../dao/room-dao");
const dao = new RoomDao();

async function GetAbl(req, res) {
    const roomId = req.params.roomId;
    try {
        const room = await dao.getRoom(roomId);
        if (room === null) {
            res.json({})
            res.status(200);
        } else {
            console.log(room)
            res.json(room);
            res.status(200)
        }
    } catch (e) {
        res.status(500).send(e);
    }
}

module.exports = GetAbl;
