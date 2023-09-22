const mongoose = require('mongoose');
//const { options } = require('../routes/router');

// uri = "mongodb+srv://rahapritam32:9749215498@cluster0.wgxfxhl.mongodb.net/nodeJS2?retryWrites=true&w=majority";


const connectDB = (DBurl) => {
    console.log("connecting database...");
    return mongoose.connect(DBurl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;