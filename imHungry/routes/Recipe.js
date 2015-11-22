var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');
var Pantry = require('../models/Pantry');
var Recipe = require('../models/Recipe')

router.get('/search', function(req, res) {
	// this assumes that there is some middleware that specifies
	// the pantry contents of the current user
	req.currentUser.getContents(function(ingredients) {
		imHungry.Recipe.searchRecipes(ingredients, function(err, recipes) {
			if (err) {
			  utils.sendErrResponse(res, 500, 'An unknown error occurred.');
			} else {
			  utils.sendSuccessResponse(res, {recipes: recipes, searched: true}); //display the tweets
			}
	  	});
	});
});

module.exports = router;