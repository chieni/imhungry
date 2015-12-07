// Contributing Authors: zlily, mmgong, chieni
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
router.get('*', requireAuthentication);


/*
  The following retrieves all recipes from the search.

  GET search/
  Request Paramaters:
  	- username
  	- ingredients in pantry
  Response:
    - success.recipes: recipes returned from search
    - err message if error occured
*/
router.get('/', function(req, res) {
	Pantry.Pantry.getIngredients(req.currentUser.username, function(err, ingredients) {
    var ingredientNames = ingredients.map(function(ingredient) {
      return ingredient.ingredient.name;
    });

		Recipe.flexibleSearch(ingredientNames, function(error, recipes) {
			if (error) {
			  utils.sendErrResponse(res, 500, 'An unknown error occurred.');
			} else {
			  utils.sendSuccessResponse(res, {recipes: recipes.recipes, searched: true, moreToLoad: recipes.moreToLoad});
			}
	  	});
	});
});

/*
The following retrieves more additional results from the search

POST search/more
Request parameters:
  - username
  - more: factor of how many more results
Response:
  - success.recipes: recipes returned from search
  - moreToLoad: boolean that indicates whether there are still more recipes that can be loaded
  - err message if error occurred
*/
router.post('/more', function(req, res) {
  Pantry.Pantry.getIngredients(req.currentUser.username, function(err, ingredients) {
    var ingredientNames = ingredients.map(function(ingredient) {
      return ingredient.ingredient.name;
    });

    Recipe.loadMoreSearchResults(ingredientNames, req.body.more, function(error, results) {
      if (error) {
        utils.sendErrResponse(res, 500, 'An unknown error occurred.');
      } else {
        utils.sendSuccessResponse(res, {recipes: results.recipes, searched: true, moreToLoad: results.moreToLoad});
      }
      });
  });
});


/*
  The following retrieves all recipes from the search given a string with comma separated ingredient values.

  POST search/
  Request Paramaters:
    - username
    - ingredients
  Response:
    - success.recipes: recipes returned from search
    - err message if error occured
*/
router.post('/', function(req, res) {
  var ing_list = req.body.ingredients.split(',');
  var final_list = [];
  ing_list.forEach(function(i){
    var trimmed = i.trim();
    if (trimmed.length > 0) {
      if (final_list.indexOf(trimmed) < 0) {
        final_list.push(trimmed);
      }
    }
  });

  Recipe.flexibleSearch(final_list, function(err, recipes) {
    if (err) {
      utils.sendErrResponse(res, 500, 'Unable to retrieve recipes.');
    } else {
      utils.sendSuccessResponse(res, {recipes: recipes.recipes, ingredients: final_list, searched: true, anon: true});
    }
  });
});

module.exports = router;