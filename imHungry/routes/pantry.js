var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');


var User = require('../models/User');
var Pantry = require('../models/Pantry');

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


/*
  The following retrieves all ingredients from the current pantry.

  GET /pantry/current
  No request parameters
  Response:
    - success.ingredients: the ingredients in the pantry
*/

router.get('/', function(req, res) {
  Pantry.Pantry.getIngredients(req.currentUser.username, function(err, ingredients) {
    if (!err) {
      utils.sendSuccessResponse(res, { ingredients: ingredients });
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  });
});

/*
  Adds a new ingredient to the pantry.

  All ingredients in the pantry must be distinct. If a request arrives with a ingredient that
  already exists, the response will be an error.

  POST /add
  Request body:
    - username
    - ingredient
  Response:
    - success: true if user creation succeeded; false otherwise
    - err: on error, an error message
*/

router.post('/add', function(req, res) {
  Pantry.Pantry.addIngredient(req.currentUser.username, req.body.ingredient, function(err, pantry) {
    if (!err) {
      utils.sendSuccessResponse(res);
    } else {
      utils.sendErrResponse(res, 400, err.msg);
    }
  });
});

/*
  Deletes an ingredient from the pantry

  DELETE /delete
  Request body:
    - username
    - ingredient
  Response:
    - success: true if ingredient deleted; false otherwise
    - err: on error, an error message
*/

router.delete('/delete', function(req, res) {
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
