var express = require('express');
var router = express.Router();
var utils = require('../utils/utils');
var Pantry = require('../models/Pantry');
var Recipe = require('../models/Recipe');
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
//router.all('*', requireAuthentication);

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