const mongoose = require('mongoose');

const prplanSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    fuserid: {
        type: String,
        required: true,
    },
    tuserid: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('PracticePlan', prplanSchema)