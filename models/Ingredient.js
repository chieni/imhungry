// NOT USED FOR MVP

// Data for each recipe ingredient is stored in a database. 

var mongoose = require('mongoose');

// An Ingredient object in the imHungry app.
// Each Ingredient object stores a name, amount, and unique ID.

var ingredientSchema = mongoose.Schema({
  name: String,
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;