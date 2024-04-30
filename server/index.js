const express = require("express");
const cors = require("cors");
require('dotenv')
const {clerkClient} = require('@clerk/clerk-sdk-node');
const roomRouter = require('./controller/room-controller.js')
const temperatureRouter = require('./controller/temperature-reading-controller.js')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use("/room", roomRouter);
app.use("/temperature-reading", temperatureRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(401).send('Unauthenticated!');
});


async function fetchUsers() {
    try {
        return await clerkClient.users.getUserList()
    } catch (e) {
        console.log(e)
    }
}

fetchUsers().then(userList => console.log(userList[1].privateMetadata.roomIds));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


