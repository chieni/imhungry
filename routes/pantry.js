var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');


var User = require('../models/User');
var Pantry = require('../models/Pantry');

/*
  Require authentication on ALL access to the pantry
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

  GET /pantry/
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

  PUT /
  Request body:
    - username
    - ingredient name
    - ingredient amount (can be empty)
  Response:
    - success: true if adding ingredient succeeded; false otherwise
    - err: on error, an error message
*/

router.put('/', function(req, res) {
  Pantry.Pantry.addIngredient(req.currentUser.username, req.body.ingredientName, req.body.ingredientAmt, function(err) {
    if (!err) {
      utils.sendSuccessResponse(res);
    } else {
      utils.sendErrResponse(res, 400, err.msg);
    }
  });
});


/*
  Edits the amount of an ingredient in the pantry. Amounts can be nothing.

  PUT /amount
  Request body:
    - username
    - ingredient id
    - ingredient amount
  Response:
    - success: true if editing the amount succeeded; false otherwise
    - err: on error, an error message
*/
router.put('/amount', function(req, res) {
  Pantry.Pantry.editIngredientAmount(req.currentUser.username, req.body.ingredientId, req.body.ingredientAmt, function(err, amt) {
    if (!err) {
      res.send({success:true});
    } else {
      res.send({
        success:false,
        message: err.msg
      })
    }
  });
});

/*
  Deletes an ingredient from the pantry

  DELETE /
  Request body:
    - username
    - ingredient id
  Response:
    - success: true if ingredient deleted; false otherwise
    - err: on error, an error message
*/

router.delete('/', function(req, res) {
  Pantry.Pantry.deleteIngredient(req.currentUser.username, req.body.ingredientId, function(err) {
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
