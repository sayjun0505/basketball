const mongoose = require('mongoose');

const skillhisSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    userid: {
        type: String,
        required: true,
    },
    skillid: {
        type: String,
        required: true,
    },
    registeredAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('HisSkill', skillhisSchema)