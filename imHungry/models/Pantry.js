// Data for each user's Pantry is stored in
// a database. 

var mongoose = require('mongoose');
var User = require('../models/User');

// A Pantry object in the imHungry app.
// Each Pantry object stores zero or more ingredients and contains a unique ID.

var pantrySchema = mongoose.Schema({
  ingredients: [String] //will replace with Ingredient object later
});

pantrySchema.statics.getIngredients = function(username, callback) {  
  User.findOne({username: username}, function(err, user) {
      if (user) {
        Pantry.findOne({_id: user.pantryId}, function(err, pantry) {
          if (pantry) {
            callback(null, pantry.ingredients);
          }
          else {
            callback({msg: "Pantry does not exist"});
          }
        })
      }
      else {
        callback({ msg : 'Invalid user.'});
      }
    });
};

pantrySchema.statics.addIngredient = function(username, ingredient, callback) {
  
  User.findOne({username: username}, function(err, user) {
      if (user) {
        Pantry.findOne({_id: user.pantryId}, function(err, pantry) {
          if (pantry) {
            pantry.push(ingredient);
          }
          else {
            callback({msg: "Pantry does not exist"});
          }
        })
      }
      else {
        callback({ msg : 'Invalid user.'});
      }
    });
};

pantrySchema.statics.deleteIngredient = function(ingredient, callback) {

};

pantrySchema.statics.createNewPantry = function(callback) {
  var newPantry = new Pantry({'ingredient': []});
    newPantry.save(function(err) {
      callback(null);
    })
}

var Pantry = mongoose.model('Pantry', pantrySchema);
module.exports = Pantry;
