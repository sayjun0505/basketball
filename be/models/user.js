const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    displayName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    birthday: {
        type: Date
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    photo: {
        type: String
    },
    registeredAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

userSchema.pre('save', function (next) {
    if (!this.uid) {
        this.uid = uuidv4();
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;