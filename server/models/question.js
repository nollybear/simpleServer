var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
    question: {type: String, required: true},  
  correctAnswer: {type: String, required: true},
  falseAnswerOne: {type: String, required: false},
  falseAnswerTwo: {type: String, required: false},
}, {timestamps: true});
mongoose.model('Question', QuestionSchema);
