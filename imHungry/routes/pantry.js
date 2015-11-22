var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');

var Pantry = require('../models/Pantry');

router.get('/', function(req, res) {
  Pantry.getIngredients(req.body.username, function(err, ingredients) {
    if (success) {
      utils.sendSuccessResponse(res, { ingredients: ingredients });
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  });
});

router.post('/add', function(req, res) {
  Pantry.addIngredient(req.body.username, req.body.ingredient, function(err, success) {
    if (success) {
      utils.sendSuccessResponse(res, { user : req.body.username });
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  });
});

router.post('')

module.exports = router;
