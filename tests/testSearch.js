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
 	var grilledCheeseRecipe = {name: 'grilled cheese', ingredients: ['bread', 'cheese', 'vegetable oil'], rating: 5,
			instructions: 'oil the bread, then but cheese on one side. Pan fry and serve.'};
	var frenchFriesRecipe = {name: 'french fries', ingredients: ['potato', 'vegetable oil'], rating: 3,
		instructions: 'chop potatoes and deep fry'};
	var smoothieRecipe = {name: 'mango smoothie', ingredients: ['orange juice', 'mango',
		'banana', 'honey'], rating: 3.1};

	before(function(done) {
		Recipe.create([grilledCheeseRecipe, frenchFriesRecipe,
			smoothieRecipe], done);
	});

 	after(function(done) {
 		Recipe.remove({}, done);
 	});

 	describe('#flexibleSearch()', function() {

 		var mapRecipesToName = function(recipe) {
			return recipe.name;
		}

 		it ('test that search results should be properly ordered', function(done) {
 			Recipe.flexibleSearch(['vegetable oil', 'cheese', 'orange juice'],
 				function(err, recipes) {
 					assert(!err);
 					assert.deepEqual(recipes.map(mapRecipesToName), ['grilled cheese', 'french fries', 'mango smoothie']);
 					done();
 				});
 		});
 	});

 	describe('#searchRecipes()', function() {

 		var mapRecipesToName = function(recipe) {
			return recipe.name;
		}

 		it('test that database is working', function(done) {
 			Recipe.find({}, function(err, recipes) {
 				assert.equal(recipes.length, 3);
 				assert.deepEqual(recipes.map(mapRecipesToName).sort(),
 					[frenchFriesRecipe.name, grilledCheeseRecipe.name, smoothieRecipe.name]);
 				done();
 			});
 		});


 		it('should return only grilled cheese recipe', function(done) {
 			Recipe.searchRecipes(['bread', 'cheese', 'vegetable oil', 'mango', 'banana'],
 				function(err, recipes) {
 					assert(!err);
 					assert.equal(recipes.length, 1);
 					assert.deepEqual(recipes.map(mapRecipesToName), [grilledCheeseRecipe.name]);
 					done();
 				});
 		});

 		it('should return no recipes', function(done) {
 			Recipe.searchRecipes(['coconut oil', 'mango'],
 				function(err, recipes) {
 					assert(!err);
 					assert.equal(recipes.length, 0);
 					done();
 				});
 		});

 		it('should return grilled cheese recipe and french fries recipe', function(done) {
 			Recipe.searchRecipes(['vegetable oil', 'cheese',
 				'potato', 'bread', 'mango'], function(err, recipes) {
 					assert(!err);
 					assert.equal(recipes.length, 2);
 					assert.deepEqual(recipes.map(mapRecipesToName).sort(), [frenchFriesRecipe.name, grilledCheeseRecipe.name]);
 					done();
 				});
 		});
 	});
 });
