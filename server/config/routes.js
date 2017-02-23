
var path = require('path');
console.log("future routes");
console.log(__dirname);
console.log(process.env['APPROOT']);
var friends = require('./../controllers/friends.js')
module.exports = function(app){

    app.get('/friends', function(req, res) {
      friends.index(req, res);
    });
    app.get('/friends/:id', function(req, res) {
        console.log("attempting to print friends in routes")
      friends.show(req, res);
    });
    app.post('/friends', function(req, res) {
        console.log("friend in routes", req.body)
      friends.create(req, res);
    });
    app.put('/friends/:id', function(req, res) {
      friends.update(req, res);
    });
    app.delete('/friends/:id', function(req, res) {
        console.log("in delete routes");
      friends.delete(req, res);
    });
};
