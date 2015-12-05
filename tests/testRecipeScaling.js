var assert = require("assert");
var Recipe = require('../models/Recipe');
var mongoose = require('mongoose');

before(function(done) {
    mongoose.connect('mongodb://localhost/test');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Mongoose connection error:'));
	db.once('open', function (callback) {
  		mongoose.connection.db.dropDatabase(done);
	});
  });

 after(function(done) {
    mongoose.connection.close();
    done();
  });

// Test the recipe search method
 describe('Recipe', function() {
 	var grilledCheeseRecipe = {name: 'grilled cheese', servingSize: 1, ingredientsWAmounts: ['2 slices bread', '1 1/2 slices cheese', '¼ tsp vegetable oil'], rating: 5,
			instructions: 'oil the bread, then but cheese on one side. Pan fry and serve.'};
	var frenchFriesRecipe = {name: 'french fries', servingSize: 3, ingredientsWAmounts: ['3 potato', '2 3/4 cup vegetable oil'], rating: 3,
		instructions: 'chop potatoes and deep fry'};
	var smoothieRecipe = {name: 'mango smoothie', servingSize: 2, ingredientsWAmounts: ['2/3 cup orange juice', '1 mango',
		'1/2 banana', 'honey to taste'], rating: 3.1};

	before(function(done) {
		Recipe.create([grilledCheeseRecipe, frenchFriesRecipe,
			smoothieRecipe], done);
	});

 	after(function(done) {
 		Recipe.remove({}, done);
 	});

 	describe('#scaleRecipe()', function() {

	 	it('should correctly scale grilled cheese', function(done) {
	 		Recipe.findOne({name: 'grilled cheese'}, function(error, recipe) {
	 			var scaledRecipe = recipe.scaleRecipe(8);
	 			assert.equal(scaledRecipe.servingSize, 8);
	 			var sortedIngredients = scaledRecipe.ingredients.sort();
	 			var answers = ['12 slices cheese', '16 slices bread', '2 tsp vegetable oil'];
	 			for (var i=0; i<3; i++) {
	 				assert.equal(sortedIngredients[i], answers[i]);
	 			}
	 			done();
	 		});
	 	});
 	});


 });