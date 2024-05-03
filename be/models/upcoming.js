const mongoose = require('mongoose');

const upcomingSchema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model('Upcoming', upcomingSchema)