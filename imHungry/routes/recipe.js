var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');
var Recipe = require('../models/Recipe')

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

router.get('/:recipe', function(req, res) {
  if (req.recipe) {
  	utils.sendSuccessResponse(res, req.recipe)
  } else {
  	utils.sendErrResponse(res, 404, 'Resource not found.');
  }
});

module.exports = router;
