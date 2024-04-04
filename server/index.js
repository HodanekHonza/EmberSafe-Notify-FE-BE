const express = require("express");
const cors = require("cors");
const roomRouter = require("./controller/room-controller");
const temperatureReadingRouter = require("./controller/temperature-reading-controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/room", roomRouter);
app.use("/temperatureReading", temperatureReadingRouter);

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
