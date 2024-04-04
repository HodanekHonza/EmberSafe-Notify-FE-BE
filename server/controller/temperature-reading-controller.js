const express = require("express");
const router = express.Router();

const CreateAbl = require("../abl/temperature-reading/create-abl");
const GetAbl = require("../abl/temperature-reading/get-abl");
const UpdateAbl = require("../abl/temperature-reading/update-abl");
const DeleteAbl = require("../abl/temperature-reading/delete-abl");
const ListAbl = require("../abl/temperature-reading/list-abl");

router.post("/postTemperature", async (req, res) => {
  await CreateAbl(req, res);
});

router.get("/seeTemperature", async (req, res) => {
  await GetAbl(req, res);
});

router.post("/update", async (req, res) => {
  await UpdateAbl(req, res);
});

router.delete("/delete/:id", async (req, res) => {
  await DeleteAbl(req, res);
});

router.get("/list", async (req, res) => {
  await ListAbl(req, res);
});

module.exports = router;
