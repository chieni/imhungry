var assert = require("assert");
var imHungry = require('../models/imHungry');
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
 	var grilledCheeseRecipe = {name: 'grilled cheese', ingredients: ['bread', 'cheese', 'vegetable oil'],
			instructions: 'oil the bread, then but cheese on one side. Pan fry and serve.'};
	var frenchFriesRecipe = {name: 'french fries', ingredients: ['potato', 'vegetable oil'],
		instructions: 'chop potatoes and deep fry'};
	var smoothieRecipe = {name: 'mango smoothie', ingredients: ['orange juice', 'mango',
		'banana', 'honey']};

	before(function(done) {
		imHungry.Recipe.create([grilledCheeseRecipe, frenchFriesRecipe,
			smoothieRecipe], done);
	});

 	after(function(done) {
 		imHungry.Recipe.remove({}, done);
 	});

 	describe('#searchRecipes()', function() {

 		var mapRecipesToName = function(recipe) {
			return recipe.name;
		}

 		it('test that database is working', function(done) {
 			imHungry.Recipe.find({}, function(err, recipes) {
 				assert.equal(recipes.length, 3);
 				assert.deepEqual(recipes.map(mapRecipesToName).sort(),
 					[frenchFriesRecipe.name, grilledCheeseRecipe.name, smoothieRecipe.name]);
 				done();
 			});
 		});


 		it('should return only grilled cheese recipe', function(done) {
 			imHungry.Recipe.searchRecipes(['bread', 'cheese', 'vegetable oil', 'mango', 'banana'],
 				function(err, recipes) {
 					assert(!err);
 					assert.equal(recipes.length, 1);
 					assert.deepEqual(recipes.map(mapRecipesToName), [grilledCheeseRecipe.name]);
 					done();
 				});
 		});

 		it('should return no recipes', function(done) {
 			imHungry.Recipe.searchRecipes(['coconut oil', 'mango'],
 				function(err, recipes) {
 					assert(!err);
 					assert.equal(recipes.length, 0);
 					done();
 				});
 		});

 		it('should return grilled cheese recipe and french fries recipe', function(done) {
 			imHungry.Recipe.searchRecipes(['vegetable oil', 'cheese',
 				'potato', 'bread', 'mango'], function(err, recipes) {
 					assert(!err);
 					assert.equal(recipes.length, 2);
 					assert.deepEqual(recipes.map(mapRecipesToName).sort(), [frenchFriesRecipe.name, grilledCheeseRecipe.name]);
 					done();
 				});
 		});
 	});
 });
