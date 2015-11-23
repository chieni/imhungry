var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');

var pantry = require('../models/Pantry');

router.get('/', function(req, res) {
  console.log("inside get");
  console.log(req.body.username);
  pantry.Pantry.getIngredients(req.currentUser.username, function(err, ingredients) {
    console.log("inside get ingredients call routes");
    if (!err) {
      utils.sendSuccessResponse(res, { ingredients: ingredients });
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  });
});

router.post('/add', function(req, res) {
  Pantry.Pantry.addIngredient(req.currentUser.username, req.body.ingredient, function(err, success) {
    if (success) {
      utils.sendSuccessResponse(res, { user : req.currentUser.username });
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  });
});

//router.post('')

module.exports = router;
