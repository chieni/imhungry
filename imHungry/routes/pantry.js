var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');


var User = require('../models/User');

/*
  Require authentication on ALL access to /freets/*
  Clients which are not logged in will receive a 403 error code.
*/
var requireAuthentication = function(req, res, next) {
  if (!req.currentUser) {
    utils.sendErrResponse(res, 403, 'Must be logged in to use this feature.');
  } else {
    next();
  }
};



// Register the middleware handlers above.
router.all('*', requireAuthentication);
//router.post('*', requireOwnership);
//router.post('*', requireContent);

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
  // Pantry.Pantry.deleteIngredient(req.currentUser.username, req.body.ingredient, function(err, pantry) {
  //   if (!err) {
  //     utils.sendSuccessResponse(res);
  //   } else {
  //     utils.sendErrResponse(res, 403, 'Something went wrong.');
  //   }
  // });
});

module.exports = router;
