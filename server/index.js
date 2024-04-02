const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let temperatureData = null;
let temperatureTimeStamp = null;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/postTemperature", (req, res) => {
  temperatureData = req.body.temp;
  temperatureTimeStamp = new Date();
  console.log("Received temperature data:", temperatureData);
  res.send("Temperature data received successfully!");
});

app.get("/seeTemperature", (req, res) => {
  if (temperatureData !== null) {
    res.json({ temp: temperatureData, timestamp: temperatureTimeStamp });
  } else {
    res.status(404).send("No temperature data available.");
  }
});

app.get("/temperature.html", (req, res) => {
  res.sendFile(__dirname + "/temperature.html");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
