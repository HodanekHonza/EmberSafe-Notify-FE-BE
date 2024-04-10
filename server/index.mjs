import express from "express";
import cors from "cors";
//import roomRouter from "./controller/room-controller.mjs"; 
//import temperatureReadingRouter from "./controller/temperature-reading-controller.mjs"; 
import clerkClient from '@clerk/clerk-sdk-node';
const app = express();
const port = process.env.PORT || 3000;
import { client } from "./db/mongoConnection.mjs";

import dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config({ path: '.env.local' });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// only for test not mandatory
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);

async function run() {
  try {
    
    // Get the database and collection on which to run the operation
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'The Room'
    const query = { title: "The Room" };
    const options = {
      // Sort matched documents in descending order by rating
      sort: { "imdb.rating": -1 },
      // Include only the `title` and `imdb` fields in the returned document
      projection: { _id: 0, title: 1, imdb: 1 },
    };
    // Execute query
    const movie = await movies.findOne(query, options);
    // Print the document returned by findOne()
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


run().catch(console.dir);


//app.use("/room", roomRouter);
//app.use("/temperatureReading", temperatureReadingRouter);
//const userList = await clerkClient.users.getUser("user_2eg8vZbvWpTBTejdoL5vCluQsQI");
const userId = 'user_2egNgObrO4tnm9CSCkUWIgq7ZNO';
 
const userProfile = await clerkClient.users.getUser(userId)
const userList = await clerkClient.users.getUserList();

const response = await clerkClient.users.updateUserMetadata(userId, {
  publicMetadata:{
    "newData": "metadata"
  }
});
 
//console.log(userProfile);
console.log(userList)
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
