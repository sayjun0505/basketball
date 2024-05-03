const mongoose = require('mongoose');

const mediahisSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    filepath: {
        type: String,
        required: true,
    },
    orgfile: {
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