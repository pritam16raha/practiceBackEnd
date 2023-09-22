require("dotenv").config();
const connectDB = require('./db/connect');

const productModel = require('./models/productSchema');

//getting json file - products.js (json file doesn't require any export in nodejs)
const productJS = require('./product.json');


const start = async () => {
    try{
        await connectDB(process.env.DATABASE2);
        await productModel.deleteMany(); //this will delete the priviously created data
        await productModel.create(productJS);
        console.log("Done! check your mongo directory");
    } catch(err){
        console.log(err);
    }
}





start();