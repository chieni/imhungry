var assert = require("assert");
var Cookbook = require('../models/Cookbook');
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

// Test the Pantry model
 describe('Cookbook', function() {
	var grilledCheeseRecipe = {name: 'grilled cheese', ingredients: ['bread', 'cheese', 'vegetable oil'], servingSize: 1, ingredientsWAmounts: ['2 slices bread', '1 1/2 slices cheese', '¼ tsp vegetable oil'], rating: 5,
			instructions: 'oil the bread, then but cheese on one side. Pan fry and serve.'};
	var frenchFriesRecipe = {name: 'french fries', servingSize: 3, ingredientsWAmounts: ['3 potato', '2 3/4 cup vegetable oil'], ingredients: ['potato', 'vegetable oil'], rating: 3,
		instructions: 'chop potatoes and deep fry'};
	var smoothieRecipe = {name: 'mango smoothie', ingredients: ['orange juice', 'mango',
		'banana', 'honey'], servingSize: 2, ingredientsWAmounts: ['2/3 cup orange juice', '1 mango',
		'1/2 banana', 'honey to taste'], rating: 3.1};
	var rater = "testUser";

	before(function(done) {
		Recipe.create([grilledCheeseRecipe, frenchFriesRecipe,
			smoothieRecipe], done);
	});

 	after(function(done) {
 		Recipe.remove({}, done);
 	});

 	describe('#createNewCookbook()', function() {

 		it ('should create a new cookbook for the given user', function(done) {
 			Cookbook.Cookbook.createNewCookbook("user", function(err, res) {
 				assert.equal(err, null);
 				done();
 			});
 		});
 	});
 });
