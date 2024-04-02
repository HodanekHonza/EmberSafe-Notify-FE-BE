const path = require("path");
const Ajv = require("ajv").default;
const RoomDao = require("../../dao/video-dao");
let dao = new VideoDao(
    path.join(__dirname, "..", "..", "storage", "room.json")
);
//change schema 
let schema = {
    type: "object",
    properties: {
        url: { type: "string" },
        name: { type: "string" },
        author: { type: "string" },
        length: { type: "number" },
        dateofrelease: { type: "string" },
        genre: { type: "string" },
        description: { type: "string" },
    },
    required: ["url", "name", "dateofrelease","genre"],
};

async function CreateAbl(req, res) {
}

module.exports = CreateAbl;