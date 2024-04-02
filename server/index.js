const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let temperatureData = null; // Variable to store temperature data

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post('/postTemperature', (req, res) => {
    // Assuming you receive temperature data in the request body
    temperatureData = req.body.temp;
    console.log("Received temperature data:", temperatureData);
    res.send("Temperature data received successfully!");
});

app.get('/seeTemperature', (req, res) => {
    if (temperatureData !== null) {
        res.json({ temp: temperatureData });
    } else {
        res.status(404).send("No temperature data available.");
    }
});

// Serve the temperature.html file
app.get('/temperature.html', (req, res) => {
  res.sendFile(__dirname + '/temperature.html');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
