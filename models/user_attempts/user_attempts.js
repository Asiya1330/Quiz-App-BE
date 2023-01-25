const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserAttmpSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'Users'
    },
    question: {
        type: ObjectId,
        required: true,
        ref: 'Question'
    },
    score: {
        type: Number,
        min: 0
    },
    user_answer: {
        type: String,
        required: true
    }
},
    { timestamps: true })

module.exports = mongoose.model('UserAttempts', UserAttmpSchema)