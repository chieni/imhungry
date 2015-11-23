var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');
var Pantry = require('../models/Pantry');
var Recipe = require('../models/Recipe')

router.get('/', function(req, res) {
	console.log("calling scavenge");
	Pantry.Pantry.getIngredients(req.currentUser.username, function(err, ingredients) {
		Recipe.searchRecipes(ingredients, function(error, recipes) {
			if (error) {
			  utils.sendErrResponse(res, 500, 'An unknown error occurred.');
			} else {
				console.log("sending success response");
			  utils.sendSuccessResponse(res, {recipes: recipes, searched: true});
			}
	  	});
	});
});

module.exports = router;