const Ajv = require("ajv").default;
const TemperatureReadingDao = require("../../dao/temperature-reading-dao");
let dao = new TemperatureReadingDao();

const schema = {
    type: "object",
    properties: {
        typeOfRoom: { type: "string" },
    },
    required: ["typeOfRoom"],
};

async function ListAbl(req, res) {
    const roomType = req.params.typeOfRoom;
    const date = req.params.date;
    try {
        const ajv = new Ajv();
        const valid = ajv.validate(schema, req.body);
        if (true) {
            const rooms = await dao.listTemperatureReadings(roomType, date);
            res.json(rooms);
        } else {
            console.log("Validation error")
            res.status(400).send(e);
        }
    } catch (e) {
        res.status(500).send(e);
    }
}

module.exports = ListAbl;
