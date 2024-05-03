const mongoose = require('mongoose');

const mediahisSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    userid: {
        type: String,
        required: true,
    },
    mediaid: {
        type: String,
        required: true,
    },
    registeredAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('MediaHis', mediahisSchema)