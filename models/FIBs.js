const mongoose = require('mongoose')

const FIBs = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    question: {
        frstPart: {
            type: String,
            required: true,
        },
        secndPart: {
            type: String,
            required:false,
            default:''
        }
    },
    correctAnswer: {
        type: String,
        required: false,
        lowercase: true 
    }
},
    { timestamps: true })

module.exports = mongoose.model('fibs', FIBs)