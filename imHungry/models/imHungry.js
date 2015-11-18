// Database model for recipes
var mongoose = require("mongoose");

/*
Recipe schema
	name: name of recipe
	ingredients: array of ingredient names
	servingsize: serving size of recipe
	instructions: body that details how to do the recipe

	does not yet incorporate ingredient amounts
*/
var recipeSchema = mongoose.Schema({
	name: String,
	ingredients: [String],
	servingsize: Number,
	instructions: String
});

// Need some sort of pantry schema
var pantrySchema = mongoose.Schema({
	username: String,
	ingredients: [String],
})

// Need some sort of user schema


recipeSchema.statics.searchRecipes = function(ingredients, callback) {
	this.find({ingredients: {$in: ingredients} }, function(err, recipes) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, recipes);
		}
	});
}

exports.Recipe = mongoose.model('Recipe', recipeSchema);
exports.Pantry = mongoose.model('Pantry', pantrySchema);