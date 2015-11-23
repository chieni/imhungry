var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');

var Pantry = require('../models/Pantry');

router.get('/', function(req, res) {
  console.log("inside get");
  Pantry.Pantry.getIngredients(req.currentUser.username, function(err, ingredients) {
    console.log("get ingredients");
    console.log(ingredients);
    if (!err) {
      utils.sendSuccessResponse(res, { ingredients: ingredients });
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  });
});

router.post('/add', function(req, res) {
  console.log("inside add ingredients call routes");
  Pantry.Pantry.addIngredient(req.currentUser.username, req.body.ingredient, function(err, pantry) {
    if (!err) {
      utils.sendSuccessResponse(res);
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  });
});

router.delete('/delete', function(req, res) {
  console.log("inside delete ingredients call routes");
  Pantry.Pantry.deleteIngredient(req.currentUser.username, req.body.ingredient, function(err, pantry) {
    if (err) {
      res.send({
        success:false,
        message: err.msg
      })
    }
    else {
      res.send({success:true});
    }
  });
});

module.exports = router;
