const express = require("express");
const router = express.Router();
require("dotenv") // To read CLERK_API_KEY
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");
const CreateAbl = require("../abl/room/create-abl");
const GetAbl = require("../abl/room/get-abl");
const UpdateAbl = require("../abl/room/update-abl");
const DeleteAbl = require("../abl/room/delete-abl");
const ListAbl = require("../abl/room/list-abl");

router.post("/create", async (req, res) => {
  await CreateAbl(req, res);
});

router.get("/get", async (req, res) => {
  await GetAbl(req, res);
});

router.post("/update", async (req, res) => {
  await UpdateAbl(req, res);
});

router.delete("/delete/:typeOfRoom", async (req, res) => {
  await DeleteAbl(req, res);
});

router.get("/list", ClerkExpressRequireAuth({
  // Add options here
  // See the Middleware options section for more details
}), async (req, res) => {
  await ListAbl(req, res);
});

module.exports = router;
