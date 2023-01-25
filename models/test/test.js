const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        unique: true
    },
    number_of_questions: {
        type: Number,
        required: true,
    },
    unlocked: {
        type: Boolean,
        default: false
    },
    priority: {
        type: Number,
        required: true
    }

},
    { timestamps: true })

module.exports = mongoose.model('Test', TestSchema)