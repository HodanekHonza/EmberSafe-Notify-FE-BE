const TemperatureReadingDao = require("../../dao/temperature-reading-dao");
const dao = new TemperatureReadingDao();

async function ListAbl(req, res) {
    const roomType = req.params.typeOfRoom;
    const date = req.params.date;
    try {
        const rooms = await dao.listTemperatureReadings(roomType, date);
        res.json(rooms);
    } catch (e) {
        res.status(500).send(e);
    }
}

module.exports = ListAbl;
