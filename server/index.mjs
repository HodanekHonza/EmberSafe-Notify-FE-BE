import express from "express";
import cors from "cors";
//import roomRouter from "./controller/room-controller.mjs"; // Update file extension to .mjs
//import temperatureReadingRouter from "./controller/temperature-reading-controller.mjs"; // Update file extension to .mjs
import clerkClient from '@clerk/clerk-sdk-node';
const app = express();
const port = process.env.PORT || 3000;

// Import dotenv
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: '.env.local' });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//app.use("/room", roomRouter);
//app.use("/temperatureReading", temperatureReadingRouter);
//const userList = await clerkClient.users.getUser("user_2eg8vZbvWpTBTejdoL5vCluQsQI");
const userId = 'user_2egNgObrO4tnm9CSCkUWIgq7ZNO';
 
const userProfile = await clerkClient.users.getUser(userId)

const response = await clerkClient.users.updateUserMetadata(userId, {
  publicMetadata:{
    "newData": "metadata"
  }
});
 
console.log(userProfile);
//console.log(userList)
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
