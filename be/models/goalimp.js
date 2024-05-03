const mongoose = require('mongoose');

const goalimpSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
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

module.exports = mongoose.model('Chatlog', goalimpSchema)