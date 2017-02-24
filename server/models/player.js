var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  score: {type: Number, required: false},
}, {timestamps: true});
mongoose.model('Player', PlayerSchema);
