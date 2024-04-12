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
    try {
        const ajv = new Ajv();
        const valid = ajv.validate(schema, req.body);
        if (valid) {
            const rooms = await dao.listTemperatureReadings(req.body.typeOfRoom);
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
