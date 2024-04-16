const express = require("express");
const router = express.Router();

const CreateAbl = require("../abl/temperature-reading/create-abl");
const ListAbl = require("../abl/temperature-reading/list-abl");

router.post("/create", async (req, res) => {
  await CreateAbl(req, res);
});

router.get("/list/:typeOfRoom/:date", async (req, res) => {
  await ListAbl(req, res);
});

module.exports = router;
