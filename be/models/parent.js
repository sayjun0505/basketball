const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    userid: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String
    },
    position: {//father or mother
        type: String,
        required: true,
    },
    phone: {
        type: String
    },
    landedphone: {
        type: String
    }
})

module.exports = mongoose.model('User', parentSchema)