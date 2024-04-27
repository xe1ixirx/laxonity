const mongoose = require('mongoose');


const mailSchema = mongoose.Schema(
    {
        mail:{
            type: String,
            required: [true, "Please enten your mail"]
        },

    }

    )

    const mailData = mongoose.model("mailData", mailSchema);

    module.exports = mailData