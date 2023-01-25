const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const QuesAttmpSchema = new mongoose.Schema({
    user_attempt: {
        type: ObjectId,
        required: true,
        ref: 'UserAttempts'
    },

    question: {
        type: ObjectId,
        required: true,
        ref: 'Questions'
    },

    answer: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1000
    }
},

    { timestamps: true })

module.exports = mongoose.model('QuestionAttempts', QuesAttmpSchema)