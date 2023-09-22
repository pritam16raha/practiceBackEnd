const mongoose = require("mongoose");
const validator = require("validator");

//create user schema
const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true //trim actuatully remove the extra spaces from leaft and right
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error("Provide a valid email id");
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength:10
    },
    gender:{
        type: String,
        enum: ["Male","Female","Transgender"]
    },
    status:{
        type: String, 
        enum: ["Active","In-Active"],
        default: "Active"
    },
    datecreated: Date,
    dateUpdated: Date
});

//model define
const users = new mongoose.model("users", usersSchema);
module.exports = users;
