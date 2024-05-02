const express = require("express");
const router = express.Router();
const {ClerkExpressRequireAuth} = require("@clerk/clerk-sdk-node");
const CreateAbl = require("../abl/temperature-reading/create-abl");
const ListAbl = require("../abl/temperature-reading/list-abl");

router.post("/create", async (req, res) => {
    await CreateAbl(req, res);
});

router.get("/list/:typeOfRoom/:date", ClerkExpressRequireAuth({
    // Add options here
    // See the Middleware options section for more details
}), async (req, res) => {
    await ListAbl(req, res);
});

module.exports = router;
