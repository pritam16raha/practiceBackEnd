const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(() => console.log("DataBase Connected, file is conn.js")).catch((err) => {
    console.log("error occured at conn.js file",err)
});