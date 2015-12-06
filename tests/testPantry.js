var assert = require("assert");
var Pantry = require('../models/Pantry');
var Ingredient = require('../models/Ingredient');
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
describe('Pantry', function() {
 	//ingredient database for testing purposes
 	var ingredients = [
 	{name: "cinnamon"},
 	{name: "truffle oil"},
 	]

 	before(function(done) {
 		Ingredient.create(ingredients, done);
 	});

 	after(function(done) {
 		Ingredient.remove({}, done);
 	});

 	describe('#createNewPantry()', function() {
 		it ('should create a new pantry for the given user', function(done) {
 			Pantry.Pantry.createNewPantry("user", function(err, res) {
 				Pantry.Pantry.findOne({username: "user"}, function(err,res){ 
 					assert.equal(res.username, "user");
 					assert.equal(res.ingredients.length, 0);
 					done();
 				})
 			});
 		});
 	});

 	describe('#addIngredient()', function() {
 		it ("should add a given ingredient and amount to a user's pantry", function(done) {
 			Ingredient.findOne({name:'truffle oil'}, function(err, ing) {
 				Pantry.Pantry.addIngredient("user", "truffle oil", "1 oz", function(err, res) {
 					Pantry.Pantry.findOne({username: "user"}, function(err,res){ 
 						assert.equal(res.username, "user");
 						assert.equal(res.ingredients.length, 1);
 						assert.equal(res.ingredients[0].ingredient, ing.id);
 						assert.equal(res.ingredients[0].amount, "1 oz");
 						done();
 					});
 				});
 			});			
 		});

 		it ("should not need a specified ingredient amount", function(done) {
 			Ingredient.findOne({name:'cinnamon'}, function(err, ing) {
 				Pantry.Pantry.addIngredient("user", "cinnamon", "", function(err, res) {
 					Pantry.Pantry.findOne({username: "user"}, function(err,res){ 
 						assert.equal(res.username, "user");
 						assert.equal(res.ingredients.length, 2);
 						assert.equal(res.ingredients[1].ingredient, ing.id);
 						assert.equal(res.ingredients[1].amount, "");
 						done();
 					});
 				});
 			})
 		});

 		it ("should not allow the same ingredient to be added more than once", function(done) {
 			Ingredient.findOne({name:'truffle oil'}, function(err, ing) {
 				Pantry.Pantry.addIngredient("user", "truffle oil", "1 oz", function(err, res) {
 					Pantry.Pantry.findOne({username: "user"}, function(err,res){ 
 						assert.equal(res.username, "user");
 						assert.equal(res.ingredients.length, 2);
 						assert.equal(res.ingredients[0].ingredient, ing.id);
 						assert.equal(res.ingredients[0].amount, "1 oz");
 						done();
 					});
 				});
 			});		
 		});

 		it ("should not allow ingredients not found in the database to be added", function(done) {
 			Pantry.Pantry.addIngredient("user", "bloop", "12 tbsp", function(err, res) {
 				Pantry.Pantry.findOne({username: "user"}, function(err,res){ 
 					assert.equal(res.username, "user");
 					assert.equal(res.ingredients.length, 2);
 					done();
 				});
 			});
 		});
 	});

	describe('#getIngredients()', function() {
		it ('should get all ingredients in the pantry of the specified user', function(done) {
			Pantry.Pantry.getIngredients("user", function(err, res) {
				assert.equal(res.length, 2);
				assert.equal(res[0].ingredient.name, "truffle oil");
				assert.equal(res[0].amount, "1 oz");
				assert.equal(res[1].ingredient.name, "cinnamon");
				assert.equal(res[1].amount, "");
				done();
			});
		});
	});

	describe('#deleteIngredient()', function() {
		it ("should delete a specified ingredient from the user's pantry", function(done) {
			Ingredient.findOne({name:'cinnamon'}, function(err, ing) {
				Pantry.Pantry.deleteIngredient("user", ing.id, function(err, res) {
					Pantry.Pantry.findOne({username: "user"}, function(err,res){ 
						assert.equal(res.username, "user");
						assert.equal(res.ingredients.length, 1);
						done();
					});
				});
			});
		});
	});


	describe('#editIngredientAmount()', function() {
		it ("should edit the amount of a specified ingredient in the pantry", function(done) {
			Ingredient.findOne({name:'truffle oil'}, function(err, ing) {
				Pantry.Pantry.editIngredientAmount("user", ing.id, "20 buckets", function(err, res) {
					Pantry.Pantry.findOne({username: "user"}, function(err,res){ 
						assert.equal(res.username, "user");
						assert.equal(res.ingredients[0].ingredient, ing.id);
						assert.equal(res.ingredients[0].amount, "20 buckets");
						done();
					});
				});
			});
		});
	});
});
