require("dotenv").config();

const express = require('express');
const app = express();

const connectD = require("./db/connect")



//creating a PORT
const PORT = process.env.PORT || 6500;

const productsRoutes = require("./routes/router");

//route defining
app.get("/", (req, res) => {
    res.send("hi, this is pritam raha, and you are live on pritam raha's page");
});

//middleware  path define
app.use("/api/products", productsRoutes); //if now anyone write localhost:6500/api/products , they can use the routes now ##




//server listening using function
const start = async () => {
    try{
        await connectD(process.env.DATABASE2); 
        app.listen(PORT, () => {
           console.log( `connected with port no ${PORT}`);
        });
    } catch(err){
        console.log(err);
    }
}

start();