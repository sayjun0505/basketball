const mongoose = require('mongoose');

const skillhisSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
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
    registeredAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('HisSkill', skillhisSchema)