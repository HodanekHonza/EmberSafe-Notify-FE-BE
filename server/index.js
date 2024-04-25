const express = require("express");
const cors = require("cors");

require('dotenv')
//const dotenv = require('dotenv');
const roomRouter = require('./controller/room-controller.js')
const temperatureRouter = require('./controller/temperature-reading-controller.js')
const app = express();
const port = process.env.PORT || 3000;
const { clerkClient } = require('@clerk/clerk-sdk-node');
//dotenv.config({ path: '.env.local' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/room", roomRouter);
app.use("/temperature-reading", temperatureRouter);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send('Unauthenticated!');
});




async function fetchUsers() {
  try {
    const userList = await clerkClient.users.getUserList();
    console.log(userList);
    await clerkClient.users.updateUserMetadata('user_2egNgObrO4tnm9CSCkUWIgq7ZNO', {
      privateMetadata: {
        stripeId: "test"
      }
    });
    console.log("success")
  } catch (e) {
    console.log(e)
  }
}
fetchUsers();

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


