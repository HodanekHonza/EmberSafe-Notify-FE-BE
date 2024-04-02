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
   try {
        const ajv = new Ajv();
        const valid = ajv.validate(schema, req.body);
        if (valid) {
            let video = req.body;
            video = await dao.createVideo(video);
            res.json(video);
        } else {
            res.status(400).send({
                errorMessage: "validation of input failed",
                params: req.body,
                reason: ajv.errors,
            });
        }
    } catch (e) {
        if (e.includes("Video with name ")) {
            res.status(400).send({ errorMessage: e, params: req.body });
        } else {
            res.status(500).send(e);
        }
    }
}

module.exports = CreateAbl;
