const mongoose = require("mongoose");


const productSc = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, "must provide the firstname"]
    },

    LastName: {
        type: String,
        required: [true, "must provide the lastname"]
    },
    Price: {
        type: Number,
        required: [true, "must provide the price"]
    },
    Featured: {
        type: Boolean,
        default: false
    },
    Rating: {
        type: Number,
        default: 4.9
    },
    Company: {
        type: String,
        enum: {
            values: ["SAMSUNG", "APPLE", "NOTHING", "MOTOROLA", "BBK-ELECTRONICS", "MI"],
            message: `{VALUE} is not supported`
        }
    },
    DateCreated: {
        type: Date,
        default: Date.now()
    }
    
});

module.exports = mongoose.model('Product', productSc);