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
	var ingredients = [
	{name: "apple"},
	{name: "cheese"},
	{name: "turmeric"},
	{name: "thin pizza crust"},
	{name: "celery"},
	{name: "truffle oil"},
	{name: "almond butter"},
	{name: "cinnamon"}
	]

	before(function(done) {
		Ingredient.create(ingredients, done);
	});

 	after(function(done) {
 		Ingredient.remove({}, done);
 	});

 	describe('#createNewPantry()', function() {

 		it ('should create a new pantry for the given user', function(done) {
 			Pantry.createNewPantry("user", function(err, res) {
 				console.log(res);
 				done();
 			});
 		});
 	});
 });
