
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
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

    classTeacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Staff'
    },

    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }]

}, { timestamps: true });

classSchema.index(
    { department: 1, year: 1, section: 1 },
    { unique: true }
);

module.exports = mongoose.model('Class', classSchema);
