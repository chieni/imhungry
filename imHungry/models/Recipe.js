// Database model for recipes
var mongoose = require("mongoose");

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

var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;