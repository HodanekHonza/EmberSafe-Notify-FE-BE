const express = require("express");
const cors = require("cors");
const pkg = require('@clerk/clerk-sdk-node');
const clerkClient = pkg.default;
const dotenv = require('dotenv');
const roomRouter = require('./controller/room-controller.js')
const temperatureRouter = require('./controller/temperature-reading-controller.js')
const app = express();
const port = process.env.PORT || 3000;

dotenv.config({ path: '.env.local' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/room", roomRouter);
app.use("/temperature-reading", temperatureRouter);

// async function fetchUsers() {
//   try {
//     const userList = await clerkClient.users.getUserList();
//     console.log(userList)
//     return userList;
//   } catch (e) {
//     console.log(e)
//   }
// }
// const response = await clerkClient.users.updateUserMetadata(userId, {
//   publicMetadata: {
//     "newData": "metadata"
//   }
// });
// fetchUsers();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});










// let temperatureData = {};
// let temperatureTimeStamp = null;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/postTemperature", (req, res) => {
//   temperatureData.temp = req.body.temp;
//   temperatureData.id = "iiiddd"
//   temperatureData.timeStamp = new Date();
//   //temperatureTimeStamp = new Date();
//   console.log("Received temperature data:", temperatureData);
//   res.send("Temperature data received successfully!");
// });

// app.get("/seeTemperature", (req, res) => {
//   if (temperatureData !== null) {
//     res.json({ temp: temperatureData, timestamp: temperatureTimeStamp });
//   } else {
//     res.status(404).send("No temperature data available.");
//   }
// });

// app.get("/temperature.html", (req, res) => {
//   res.sendFile(__dirname + "/temperature.html");
// });
