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

  POST /:recipe
  Request body:
    - servingSize: number representing desired serving size to be displayed
  Response:
    - success: response is true if successful, false otherwise
    - err if error on request

*/
router.post('/:recipe', function(req, res) {
  if (req.recipe) {
    var scaledRecipe = req.recipe.scaleRecipe(req.body.servingSize);
    //res.redirect({ recipe: req.recipe, currentUser: req.currentUser }, '/recipe');
  	utils.sendSuccessResponse(res, scaledRecipe);
  } else {
  	utils.sendErrResponse(res, 404, 'Resource not found.');
  }
});

module.exports = router;
