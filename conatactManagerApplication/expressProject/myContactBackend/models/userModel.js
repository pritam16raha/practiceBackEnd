const mongoose = require("mongoose");
 const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "please add the username"],
    },
    email: {
        type: String,
        require : [true, "please add the user email address"],
        unique: [true, "Email is already present in the database"]
    },
    password: {
        type: String,
        require: true
    }
 }, {
    timestamps: true
 });

 module.exports = mongoose.userSchema("User", userSchema);