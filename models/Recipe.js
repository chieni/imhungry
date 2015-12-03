// Database model for recipes
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
	rating: Number
});

/*var recipeSchema = mongoose.Schema({
	name: String,
	ingredients: [Ingredient],
	servingSize: Number,
	totalTime: Number,
	sourceURL: String,
	imageURLs: [String],
	rating: Number
});*/

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

var mapFunc = function(doc) {
	this.findById(doc._id, function(err,recipe) {
		var numExtraIngred = recipe.ingredients.length - doc.total;
		return {recipe: recipe, numUnmatched: numExtraIngred};
	});

}

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

recipeSchema.statics.flexibleSearch = function(ingredients, callback) {
	var self = this;
	this.aggregate([
		{$match:{ingredients:{$in: ingredients}}},
		{$unwind: "$ingredients"},
		{$match:{ingredients:{$in: ingredients}}},
		{ $group: { _id: "$_id", total: {$sum:1}}}],
		function(err, results) {
			if (err) {
				callback(err, null);
			} else {

				var extraIngreds = [];
				var recipes = [];

				results.forEach(function(result) {
					self.findById(result._id, function(err,recipe) {
						if (err) {
							callback(err, null);
						} else {
							var numExtraIngred = recipe.ingredients.length - result.total;
							extraIngreds.push(numExtraIngred);
							recipes.push(recipe);

							if (recipes.length == results.length) {
								var sortedRecipes = results.map(function(result) {
									var newRecipe = recipes[0];
									recipes.shift();
									var numAddIng = extraIngreds[0];
									extraIngreds.shift();
									return {recipe: newRecipe, numUnmatched: numAddIng};
								}).sort(sortingFunc).map(function(recipe) {
									return recipe.recipe;
								});

								callback(null, sortedRecipes.slice(0,100)); 
							}
						}
						});
				});
			}
		});
}

// should this have a username field??
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

recipeSchema.methods.scaleRecipe = function(servingSize) {
	var scaleFactor = servingSize / this.servingSize;
	var scaledIngredients = this.ingredientsWAmounts.map(function(ingredient) {
		var scaledIngredient = ingredient;
		if (ingredient.match(/\d/)) {
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


var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;