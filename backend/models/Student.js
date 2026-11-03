
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },

    section: {
        type: String,
        required: true
    },

    faceDescriptor: {
        type: [Number],
        default: null
    },

    isActive: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
