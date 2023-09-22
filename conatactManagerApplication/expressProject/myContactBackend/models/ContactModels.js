const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add the contact name"]
    },

    email:{
        type: String,
        require: [true, "Please give a valid mail id"]
    },

    phone:{
        type: Number,
        require: [true, "Please give valid phone number"]
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Contact", contactSchema );