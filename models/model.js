const mongoose = require('mongoose');

const usrSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enten your name"]
        },

        email:{
            type: String,
            required: [true, "Please enten your E-mail"]
        },

        phone:{
            type: String,
            required: [true, "Please enten your phone number"]
        },

        usrText:{
            type: String,
            required: [true, "Please enten something"]
        },
    },
    {
        timestamps: true
    }
)

const usrData = mongoose.model("usrData", usrSchema);

module.exports = usrData