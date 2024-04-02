
const express = require("express");
const cors = require("cors");

const videoRouter = require("./controller/video-controller");
const favoriteVideoRouter = require("./controller/favorite-video-controller");
const topicsRouter = require("./controller/topics-controller");
//const { addAbortSignal } = require("stream");



const express = require('express');
const app = express();

const port = process.env.PORT || 8000;


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(cors())


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/room", roomRouter);
app.use("/notifications", favoriteVideoRouter);
//app.use("/", topicsRouter);




//



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
