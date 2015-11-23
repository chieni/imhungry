var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');
var Recipe = require('../models/Recipe')

/*
  The following calls getRecipe from the Recipe schema given a recipeId
  It populates req with a recipe object
*/
router.param('recipe', function(req, res, next, recipeId) {
  	Recipe.getRecipe(req.currentUser.username, recipeId, function(err, recipe) {
	    if (recipe) {
	      req.recipe = recipe;
	      next();
	    } else {
	      utils.sendErrResponse(res, 404, 'Resource not found.');
	    }
  });
});

/*
  The following gets a recipe from the database

  GET /:recipe
  Request body:
    - none
  Response:
    - success: response is true if successful, false otherwise
    - err if error on request

*/
router.get('/:recipe', function(req, res) {
  if (req.recipe) {
  	utils.sendSuccessResponse(res, req.recipe)
  } else {
  	utils.sendErrResponse(res, 404, 'Resource not found.');
  }
});

module.exports = router;
