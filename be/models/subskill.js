const mongoose = require('mongoose');

const subskillSchema = new mongoose.Schema({
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

module.exports = mongoose.model('SubSkill', subskillSchema)