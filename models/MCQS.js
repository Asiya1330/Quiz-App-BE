const mongoose = require('mongoose')

const MCQS = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    question: {
        type: String,
        required: true,
        unique: true
    },
    answers: {
        type: Array,
        required: true,
        unique:false
    },
    correctAnswer: {
        type: String,
        required: true,
    },
    
},
    { timestamps: true })

module.exports = mongoose.model('Mcqs', MCQS)