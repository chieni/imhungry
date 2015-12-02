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

recipeSchema.statics.flexibleSearch = function(ingredients, extraNum, callback) {

}

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
		console.log("match");
		var amount = 0;
		number.split(" ").forEach(function(piece) {
			console.log(piece);
			if (piece) {
				if (piece.match("/")) {
					var fraction = piece.split("/");
					console.log(fraction);
					amount += parseInt(fraction[0]) / parseInt(fraction[1]);
				} else {
					amount += parseInt(piece);
				}
			}
		});
		return amount;
	} else {
		console.log("here??");
		return parseInt(number);
	}
}

recipeSchema.methods.scaleRecipe = function(servingSize) {
	var scaleFactor = servingSize / this.servingSize;
	var scaledIngredients = this.ingredientsWAmounts.map(function(ingredient) {
		var scaledIngredient = ingredient;
		if (ingredient.match(/\d/)) {
			var stringAmt = ingredient.split(/[a-zA-z]/,2)[0];
			console.log(stringAmt);
			var remainingIngString = ingredient.substring(stringAmt.length);
			console.log(remainingIngString);
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