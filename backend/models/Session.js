
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },

    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    startTime: String,

    endTime: String,

    qrToken: {
        type: String,
        default: null
    },

    qrExpiresAt: {
        type: Date,
        default: null
    },

    location: {
        latitude: Number,
        longitude: Number,
        radius: {
            type: Number,
            default: 100
        }
    },

    isActive: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Session', sessionSchema);
