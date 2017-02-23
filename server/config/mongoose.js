var mongoose    = require('mongoose'),
    path        = require('path'),
    fs          = require('fs');

mongoose.connect('mongodb://localhost/test_db');

var models_path = path.join(__dirname, './../models');
console.log("in mongoose file")
console.log(models_path)

fs.readdirSync(models_path).forEach(function(file) {
    if( file.indexOf('.js') >= 0 ) {
        require(models_path + '/' + file);
    }
})
