
const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    staffId: {
        type: String,
        required: true,
        unique: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['teacher', 'admin'],
        required: true
    },

    department: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Staff', staffSchema);
