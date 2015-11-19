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

// Test the User collection methods
 describe('Recipe', function() {
	before(function(done) {
		grilledCheeseRecipe = {name: 'grilled cheese', ingredients: ['bread', 'cheese', 'butter'],
			instructions: 'butter bread, then but cheese on one side. Pan fry and serve.'};
		imHungry.Recipe.create([grilledCheeseRecipe,
			{name: 'french fries', ingredients: ['potato', 'vegetable oil'],
			instructions: 'chop potatoes and deep fry'},
			{name: 'mango smoothie', ingredients: ['orange juice', 'mango',
			'banana', 'honey']}]);
	});

 	after(function(done) {
 		imHungry.Recipe.remove({}, done);
 	});

 	describe('#searchRecipes()', function() {
 		it('should return a recipe', function(done) {
 			imHungry.Recipe.searchRecipes(['bread', 'cheese', 'butter', 'potato', 'mango', 'banana'],
 				function(err, recipes) {
 					assert(!err);
 					assert.equal(recipes.length, 1);
 					assert.deepEqual(recipes.toObject(), [grilledCheeseRecipe]);
 				});
 		});
 	});
 });
