const mongoose = require('mongoose');

const injurySchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    playerid: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model('InjuryReport', injurySchema)