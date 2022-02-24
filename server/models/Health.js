const mongoose = require("mongoose");


//Health data model

const healthSchema = mongoose.Schema({
    water: {
        type: String,
        required: [true, "Please enter an how much water you been drink today!"],

    },
    sleep: {
        type: Number,
        required: [true, "Please enter how much you have been sleeping today!"],
    },
    meal: {
        type: Number,
        required: [true, "Please enter how much meal you have today!"],
    },
    training: {
        type: Boolean,
        required: [true, "Please enter a have you train today"],
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

},{ timestamps: true });


module.exports = mongoose.model("Health", healthSchema);