// Database model for recipes
var async = require("async");
var mongoose = require("mongoose");
var Ingredient = require('../models/Ingredient');

/*
Schema for recipe
	name: String name of recipe
	ingredients: List of ingredients
	ingredientWAmounts: list of ingredients with amounts
	servingSize: serving size of recipe
	totalTime: time required to cook recipe
	sourceURL: source where recipe is from
	imageURL: list of urls for recipe images
	rating: rating of recipe
*/
var recipeSchema = mongoose.Schema({
	name: String,
	ingredients: [String],
	ingredientsWAmounts: [String],
	servingSize: Number,
	totalTime: Number,
	sourceURL: String,
	imageURLs: [String],
	rating: Number,
	ratingDict: [{
		userId: String,
		rating: Number
	}]
});


/*
Search for recipes that only use a subset of the given ingredients
params:
ingredients - [String] array of string names of ingreidents
callback - function to call afterwords, takes two parameters of error and recipe objects
*/
recipeSchema.statics.searchRecipes = function(ingredients, callback) {
	this.find({ingredients: {$not:{$elemMatch:{$nin:ingredients}}}}, function(err, recipes) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, recipes);
		}
	});
}

/*
Sorting algorithm used to sort recipes
Recipes are first sorted in ascending order by the number of extra ingredients they require, and
then sorted in descending order by rating
*/
var sortingFunc = function(a,b) {
	if (a.numUnmatched == b.numUnmatched) {
		if (!a.recipe.rating) {
			a.recipe.rating = 0;
		}
		if (!b.recipe.rating) {
			b.recipe.rating = 0;
		}
		if (a.recipe.rating >= b.recipe.rating) {
			return -1;
		} else {
			return 1;
		}
	} else {
		return a.numUnmatched - b.numUnmatched;
	}
}


/*
Search for recipes that use AT LEAST one ingredient from given list of ingredients and returns
the recipes in the sorted order described in the sortingFunc above. Limit 99 recipes
params:
	ingredients [String] ingredients to use in search
*/
recipeSchema.statics.flexibleSearch = function(ingredients, callback) {
	var self = this;

	var mapFunc = function(doc, callback) {
		self.findById(doc._id, function(err,recipe) {
			var modRecipe = {recipe: recipe, numUnmatched: doc.total};
			callback(err, modRecipe);
		});
	}

	var moreToLoad = true;

	this.find({ingredients: {$not:{$elemMatch:{$nin:ingredients}}}}).sort({rating:-1}).limit(99).exec(function(err, recipes) {
		if (err) {
			callback(err, null);
		} else {
			var limit = 99-recipes.length;
			recipes = recipes.map(function(recipe) {
				var obRec = recipe.toObject();
				obRec.numUnmatched = 0;
				return obRec;
			});
			if (limit > 0) {
				self.aggregate([
					{$match:{ingredients:{$in: ingredients}}},
					{$unwind: "$ingredients"},
					{$match:{ingredients:{$nin: ingredients}}},
					{ $group: { _id: "$_id", total: {$sum:1}}},
					{$sort: {total: 1}},
					{$limit: limit}],
					function(err, results) {
						if (err) {
							callback(err, null);
						} else {
							async.map(results, mapFunc, function(err, res) {
								var sortedRecipes = res.sort(sortingFunc)
								.map(function(recipe) {
									var objRecipe = recipe.recipe.toObject();
									objRecipe.numUnmatched = recipe.numUnmatched;
									return objRecipe;
								});

								recipes = recipes.concat(sortedRecipes);

								moreToLoad = recipes.length == 99;
								callback(null, {moreToLoad: moreToLoad, recipes: recipes});
							});
						}
					});
			} else {
				moreToLoad = recipes.length == 99;
				callback(null, {moreToLoad: moreToLoad, recipes: recipes});
			}
		}
	});
}

/*
Searches for recipes except the limit is now a multiple of 99 and a given positive int
params:
	ingredients [String] list of ingredients to search with
	more Number positive integer to determine how many recipes to return
*/
recipeSchema.statics.loadMoreSearchResults = function(ingredients, more, callback) {
	var self = this;

	var mapFunc = function(doc, callback) {
		self.findById(doc._id, function(err,recipe) {
			var modRecipe = {recipe: recipe, numUnmatched: doc.total};
			callback(err, modRecipe);
		});
	}

	var moreLimit = more*99;
	var moreToLoad = true;

	this.find({ingredients: {$not:{$elemMatch:{$nin:ingredients}}}}).sort({rating:-1}).limit(moreLimit).exec(function(err, recipes) {
		if (err) {
			callback(err, null);
		} else {
			var limit = moreLimit-recipes.length;
			recipes = recipes.map(function(recipe) {
				var obRec = recipe.toObject();
				obRec.numUnmatched = 0;
				return obRec;
			});
			if (limit > 0) {
				self.aggregate([
					{$match:{ingredients:{$in: ingredients}}},
					{$unwind: "$ingredients"},
					{$match:{ingredients:{$nin: ingredients}}},
					{ $group: { _id: "$_id", total: {$sum:1}}},
					{$sort: {total: 1}},
					{$limit: limit}],
					function(err, results) {
						if (err) {
							callback(err, null);
						} else {
							async.map(results, mapFunc, function(err, res) {
								var sortedRecipes = res.sort(sortingFunc)
								.map(function(recipe) {
									var objRecipe = recipe.recipe.toObject();
									objRecipe.numUnmatched = recipe.numUnmatched;
									return objRecipe;
								});

								recipes = recipes.concat(sortedRecipes);

								moreToLoad = recipes.length == moreLimit;

								callback(null, {moreToLoad: moreToLoad, recipes: recipes});
							});
						}
					});
			} else {
				moreToLoad = recipes.length == moreLimit;
				callback(null, {moreToLoad: moreToLoad, recipes: recipes});
			}
		}
	});
}

// should this have a username field??
// probably not! It is never used
recipeSchema.statics.getRecipe = function(username, recipeId, callback) {
	this.findById(recipeId, function(err, doc){
		if (err) {
			callback(err, null);
		} else {
			callback(null,doc);
		}
	});
}

/*
Helper function that parses numbers in mixed fraction form and returns answer in decimal form
*/
var evaluateStringNumber = function(number) {
	if (number.match('/')) {
		var amount = 0;
		number.split(" ").forEach(function(piece) {
			if (piece) {
				if (piece.match("/")) {
					var fraction = piece.split("/");
					amount += parseInt(fraction[0]) / parseInt(fraction[1]);
				} else {
					amount += parseInt(piece);
				}
			}
		});
		return amount;
	} else {
		return parseInt(number);
	}
}

// maps of vulgar unicode fractions to values
var vulgarFractionMap = {"¼": 0.25, "¾": 0.75, "⅔": 2/3, "½": 0.5, "⅓": 1/3};
var vulgarFractions = ["¼","¾","⅔","½","⅓"];

/*
Scales recipe ingredients from default serving size to new specified serving size
params:
	servingSize Number new desired serving size
*/
recipeSchema.methods.scaleRecipe = function(servingSize) {
	var scaleFactor = servingSize / this.servingSize;
	if (!servingSize) { // if serving size is not specified
		scaleFactor = 1;
		servingSize = this.servingSize;
	}
	var scaledIngredients = this.ingredientsWAmounts.map(function(ingredient) {
		var scaledIngredient = ingredient;
		if (vulgarFractions.indexOf(ingredient[0])>=0) {
			var remainingString = ingredient.substring(2);
			var frac = vulgarFractionMap[ingredient[0]];
			scaledIngredient = scaleFactor*frac + " " + remainingString;
		} else if (vulgarFractions.indexOf(ingredient[1])>=0 && ingredient.match(/\d/)) {
			var remainingString = ingredient.substring(2);
			var frac = vulgarFractionMap[ingredient[1]];
			scaledIngredient = scaleFactor*(parseInt(ingredient[0])+frac) + " " + remainingString;
		} else if (ingredient.match(/\d/)) {
			var stringAmt = ingredient.split(/[a-zA-z]/,2)[0];
			var remainingIngString = ingredient.substring(stringAmt.length);
			scaledIngredient = scaleFactor*evaluateStringNumber(stringAmt) + " " + remainingIngString;
		}
		return scaledIngredient;
	});
	this.ingredients = scaledIngredients;
	this.servingSize = servingSize;
	return this;
}

/*
The following method is used to calculate the rating of a recipe given a rating
*/
recipeSchema.statics.rateRecipe = function(recipeId, rating, userId, callback) {
	var index = -1;
	this.findById(recipeId, function(err, recipe){
		if (err) {
			callback({msg: 'Recipe does not exist'});
		} else {
			recipe.ratingDict.forEach(function(userRating) {
				if (userRating.userId.toString() === userId.toString()) {
					index = recipe.ratingDict.indexOf(userRating)
				}
			});
			if (index==-1) {
				console.log("ok first time");
				recipe.ratingDict.push({userId: userId, rating: rating});
			}
			else {
				console.log("should replace rating now");
				recipe.ratingDict[index].rating=rating;
			}
			aggregateRating = 0;
			recipe.ratingDict.forEach(function(userRating){
				aggregateRating+=userRating.rating
			})
			numUsers = recipe.ratingDict.length
			rating = aggregateRating/numUsers
			recipe.rating = rating;
			recipe.save(function(err) {
              if(err) {
                callback({msg:"error rating recipe"}, null);
              }
              else {
              	console.log(recipe);
                callback(null, rating);
              }
            });
		}

			
	});
}


var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;