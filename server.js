var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
process.env['APPROOT'] = __dirname;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./client')));
require(path.join(__dirname, "./server/config/mongoose.js"));
console.log("attempting to print");
console.log(__dirname,".client");
require(path.join(__dirname, "./server/config/routes.js"))(app);
app.use(express.static(path.join(__dirname, 'bower_components' )));
app.listen(8000, function() {
 console.log("listening on port 8000");
});
