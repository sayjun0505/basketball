const mongoose = require('mongoose');

const mskillSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    skill: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('MainSkill', mskillSchema)