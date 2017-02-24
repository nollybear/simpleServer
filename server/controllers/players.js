var mongoose = require('mongoose');
var Player = mongoose.model('Player');
console.log("in players controller");

module.exports = {
  index: function(req, res) {
    Player.find({}, function(err, data) {
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
    Player.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  create: function(req, res) {
    console.log('Players controller create:', req.body);

    var player = new Player(req.body);
    console.log(player);
    player.save(function(err) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(player);
      }
    })
  },
  update: function(req, res) {
    console.log(req.params, req.body);
    Player.findOne({_id: req.params.id}, function(err, data) {
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
    Player.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
          console.log("in first error")
        console.log(err);
        res.json(err);
      } else {
        Player.remove(data, function(error, datum) {
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
