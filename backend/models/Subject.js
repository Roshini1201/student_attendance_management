
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    subjectCode: {
        type: String,
        required: true,
        unique: true
    },

    subjectName: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    assignedTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff',
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('Subject', subjectSchema);
