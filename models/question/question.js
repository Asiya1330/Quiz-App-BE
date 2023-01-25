const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const QuestionSchema = new mongoose.Schema({
    test: {
        type: ObjectId,
        required: true,
        ref: 'Tests'
    },

    type: {
        type: String,
        required: true,
        enum: ['mcqs','fill-in-blanks' ,'drop-down', 'audio-with-question','fill-in-blanks-with-options','2audios','fill-in-blanks-with-DD','image','image-with-mcqs', 'audio-with-ans-audio']
    },

    text: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000
    },

    options: {
        type: [String],
        default: []
    },
    image: {
        type: String,
        default: ''
    },
    audio: {
        type: String,
        default: ''
    },
    correct_answer: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1000
    }
},
    { timestamps: true })

module.exports = mongoose.model('Question', QuestionSchema)