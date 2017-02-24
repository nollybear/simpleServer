var mongoose = require('mongoose');
var Question = mongoose.model('Question');
console.log("in questions controller");

module.exports = {
  index: function(req, res) {
    Question.find({}, function(err, data) {
      if(err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  show: function(req, res) {
    console.log(req.params);
    Question.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  create: function(req, res) {
    console.log('Questions controller create:', req.body);

    var question = new Question(req.body);
    console.log(question);
    question.save(function(err) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(question);
      }
    })
  },
  update: function(req, res) {
    console.log(req.params, req.body);
    Question.findOne({_id: req.params.id}, function(err, data) {
      for (var i in req.body) {
        if (data[i] && data[i] !== req.body[i]) {
          data[i] = req.body[i];
        }
      }
      data.save(function(err, data) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(data);
        }
      })
    })
  },
  delete: function(req, res) {
    Question.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
          console.log("in first error")
        console.log(err);
        res.json(err);
      } else {
        Question.remove(data, function(error, datum) {
          if (error) {
              console.log("in second error")
            console.log(error);
            res.json(error);
          } else {
              console.log("able to delete");
            res.json(datum);
          }
        })
      }
    })
  }
}
