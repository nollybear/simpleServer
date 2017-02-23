var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  age: {type: Number, required: true}
}, {timestamps: true});
mongoose.model('Friend', FriendSchema);
