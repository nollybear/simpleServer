
var path = require('path');
console.log("future routes");
console.log(__dirname);
console.log(process.env['APPROOT']);
var players = require('./../controllers/players.js');
var questions = require('./../controllers/questions.js')

module.exports = function(app){

    app.get('/players', function(req, res) {
      players.index(req, res);
    });
    app.get('/players/:id', function(req, res) {
        console.log("attempting to print players in routes")
      players.show(req, res);
    });
    app.post('/players', function(req, res) {
        console.log("player in routes", req.body)
      players.create(req, res);
    });
    app.put('/players/:id', function(req, res) {
      players.update(req, res);
    });
    app.delete('/players/:id', function(req, res) {
        console.log("in delete routes");
      players.delete(req, res);
    });

    app.get('/questions', function(req, res) {
      questions.index(req, res);
    });
    app.get('/questions/:id', function(req, res) {
        console.log("attempting to print questions in routes")
      questions.show(req, res);
    });
    app.post('/questions', function(req, res) {
        console.log("player in routes", req.body)
      questions.create(req, res);
    });
    app.put('/questions/:id', function(req, res) {
      questions.update(req, res);
    });
    app.delete('/questions/:id', function(req, res) {
        console.log("in delete routes");
      questions.delete(req, res);
    });



};
