require("dotenv").config(); //importing .env file
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors"); //CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
const router = require("./Routes/router");
const PORT = 5004;





app.use(cors()); //beckend port is 5004 and backend port is 3000, here cors is required to make a connection between two different origin
app.use(express.json()); //all the data from front end will be in json format
app.use(router);



//get response 
// app.get("/",(req,res) => {
//     res.status(200).json("server is starting...");
// });

//starting the server
app.listen(PORT, () => {
    console.log(`server is started successfully on ${PORT}`)
});



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://rahapritam32:9749215498@cluster0.wgxfxhl.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

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
