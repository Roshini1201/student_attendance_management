
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },

    session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Session',
        required: true
    },

    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        default: 'Present'
    },

    verification: {
        qrVerified: {
            type: Boolean,
            default: false
        },

        gpsVerified: {
            type: Boolean,
            default: false
        },

        faceVerified: {
            type: Boolean,
            default: false
        }
    },

    markedAt: {
        type: Date,
        default: Date.now
    }

}, { timestamps: true });

attendanceSchema.index(
    { student: 1, session: 1 },
    { unique: true }
);

module.exports = mongoose.model('Attendance', attendanceSchema);
