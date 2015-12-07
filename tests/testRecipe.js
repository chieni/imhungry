// Primary author: mmgong, contributing author: nlucas
var assert = require("assert");
var Recipe = require('../models/Recipe');
var mongoose = require('mongoose');

/*
Testing suite for various search functions
*/
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
 	var grilledCheeseRecipe = {name: 'grilled cheese', ingredients: ['bread', 'cheese', 'vegetable oil'], servingSize: 1, ingredientsWAmounts: ['2 slices bread', '1 1/2 slices cheese', '¼ tsp vegetable oil'], rating: 5,
			instructions: 'oil the bread, then but cheese on one side. Pan fry and serve.'};
	var frenchFriesRecipe = {name: 'french fries', servingSize: 3, ingredientsWAmounts: ['3 potato', '2 3/4 cup vegetable oil'], ingredients: ['potato', 'vegetable oil'], rating: 3,
		instructions: 'chop potatoes and deep fry'};
	var smoothieRecipe = {name: 'mango smoothie', ingredients: ['orange juice', 'mango',
		'banana', 'honey'], servingSize: 2, ingredientsWAmounts: ['2/3 cup orange juice', '1 mango',
		'1/2 banana', 'honey to taste'], rating: 3.1};
	var rater = "testUser";
	var rater2 = "anotherUser";

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
 					assert.deepEqual(recipes.recipes.map(mapRecipesToName), ['grilled cheese', 'french fries', 'mango smoothie']);
 					done();
 				});
 		});

 		it ('test that the number extra ingredients are correct', function(done) {
 			Recipe.flexibleSearch(['honey','potato','vegetable oil', 'eggs'],
 				function(err, recipes) {
 					assert(!err);
 					assert.deepEqual(recipes.recipes.map(mapRecipesToName), ['french fries', 'grilled cheese', 'mango smoothie']);
 					recipes.recipes.forEach(function(recipe) {
 						if (recipe.name=='french fries') {
 							assert.equal(recipe.numUnmatched, 0);
 						} else if (recipe.name=='grilled cheese') {
 							assert.equal(recipe.numUnmatched, 2);
 						} else {
 							assert.equal(recipe.numUnmatched, 3);
 						}
 					});
 					done();
 				});
 		});
 	});


	describe('#loadMoreSearchResults()', function() {
		var testRecipe = {name: 'test', ingredients: ['banana']};
		before(function(done) {
			var testRecipes = [];
			for (var i=0; i<500; i++) {
				testRecipes.push(testRecipe);
			}
			testRecipes.push({name:'test', ingredients: ['milk']});
			Recipe.create(testRecipes, done);
		});

	 	after(function(done) {
	 		Recipe.remove({name: 'test'}, done);
	 	});

	 	it('should return specified amount of results', function(done) {
	 		Recipe.loadMoreSearchResults(['banana'], 3, function(err, recipes) {
	 			assert(!err);
	 			assert.equal(recipes.recipes.length, 3*99);
	 			assert(recipes.moreToLoad);
	 			done();
	 		});
	 	});

	 	it('should return only one recipe and have moreToLoad false', function(done) {
	 		Recipe.loadMoreSearchResults(['milk'], 2, function(err, recipes) {
	 			assert(!err);
	 			assert.equal(recipes.recipes.length, 1);
	 			assert(!recipes.moreToLoad);
	 			done();
	 		});
	 	});
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

	 	it('should correctly scale french fries recipe', function(done) {
	 		Recipe.findOne({name: 'french fries'}, function(error, recipe) {
	 			var scaledRecipe = recipe.scaleRecipe(6);
	 			assert.equal(scaledRecipe.servingSize, 6);
	 			var sortedIngredients = scaledRecipe.ingredients.sort();
	 			var answers = ['5.5 cup vegetable oil', '6 potato'];
	 			for (var i=0; i<2; i++) {
	 				assert.equal(sortedIngredients[i], answers[i]);
	 			}
	 			done();
	 		});
	 	});

	 	it('should correctly scale smoothieRecipe', function(done) {
	 		Recipe.findOne({name: 'mango smoothie'}, function(error, recipe) {
	 			var scaledRecipe = recipe.scaleRecipe(1);
	 			assert.equal(scaledRecipe.servingSize, 1);
	 			var sortedIngredients = scaledRecipe.ingredients.sort();
	 			var answers = ['0.25 banana', '0.33 cup orange juice', '0.5 mango', '0.5x honey to taste'];
	 			for (var i=0; i<4; i++) {
	 				assert.equal(sortedIngredients[i], answers[i]);
	 			}
	 			done();
	 		});
	 	});
 	});
	
	describe('#rateRecipe()', function(done) {
		it('test that a user can rate a recipe', function(done) {
			Recipe.findOne({name: 'french fries'}, function(error, recipe) {
				var recipeId = recipe._id;
				Recipe.rateRecipe(recipeId, 1, rater, function(error, rating) {
				assert.equal(rating, 1);
				done();
			});
			})
			
		})

		it('test that a user can only rate a recipe once', function(done) {
			Recipe.findOne({name: 'french fries'}, function(error, recipe) {
				var recipeId = recipe._id;
				Recipe.rateRecipe(recipeId, 5, rater, function(error, rating) {
					assert.equal(rating, 5);
					done();
				})
			});
		})
		it('test that a rating will aggregate over multiple users ratings', function(done) {
			Recipe.findOne({name: 'french fries'}, function(error, recipe) {
				var recipeId = recipe._id;
				Recipe.rateRecipe(recipeId, 1, rater2, function(error, rating) {
					assert.equal(rating, 3);
					done();
				} )
			})
		})
	})

 	describe('#searchRecipes()', function() {

 		var mapRecipesToName = function(recipe) {
			return recipe.name;
		}


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
