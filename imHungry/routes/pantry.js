var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');

<<<<<<< HEAD
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

/*
  Require ownership whenever accessing a particular pantry
  This means that the client accessing the resource must be logged in
  as the user that the pantry is associated with. Clients who are not owners 
  of this particular resource will receive a 404.

  Why 404? We don't want to distinguish between pantries that don't exist at all
  and pantries that exist but don't belong to the client. This way a malicious client
  that is brute-forcing urls should not gain any information.
*/
var requireOwnership = function(req, res, next) {
  if (!(req.currentUser.username === req.pantry.user)) {
    utils.sendErrResponse(res, 404, 'Resource not found.');
  } else {
    next();
  }
};

/*
  For create and edit requests, require that the request body
  contains a 'content' field. Send error code 400 if not.
*/
var requireContent = function(req, res, next) {
  if (!req.body.content) {
    utils.sendErrResponse(res, 400, 'Content required in request.');
  } else {
    next();
  }
};

// Register the middleware handlers above.
router.all('*', requireAuthentication);
router.post('*', requireOwnership);
router.post('*', requireContent);

var Pantry = require('../models/Pantry');
>>>>>>> a27f1a93c2d5bdc0e46af3e50ab2392c4e711ceb

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
      utils.sendSuccessResponse(res, { pantry: pantry});
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  });
});

module.exports = router;
