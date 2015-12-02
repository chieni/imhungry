var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');
var Recipe = require('../models/Recipe');
var Cookbook = require('../models/Cookbook');

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
    inCookbook = false;
    //res.redirect({ recipe: req.recipe, currentUser: req.currentUser }, '/recipe');
    Cookbook.Cookbook.getRecipes(req.currentUser.username, function(err, recipes) {
    if (!err) {
      if (req.recipe in recipes) {
        inCookbook = true;
      };
    } else {
      utils.sendErrResponse(res, 403, 'Something went wrong.');
    }
  })
  	utils.sendSuccessResponse(res, {recipe: scaledRecipe, inCookbook: inCookbook})
  } else {
  	utils.sendErrResponse(res, 404, 'Resource not found.');
  }
});

module.exports = router;
