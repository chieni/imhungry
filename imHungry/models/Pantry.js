// Data for each user's Pantry is stored in
// a database. 



// A Pantry object in the imHungry app.
// Each Pantry object stores zero or more ingredients and contains a unique ID.
var Pantry = (function Pantry() {

  var that = Object.create(Pantry.prototype);
  var mongoose = require('mongoose');
  var User = require('../models/User');

  var pantrySchema = mongoose.Schema({
    ingredients: [String] //will replace with Ingredient object later
  });

  var pantryModel = mongoose.model("Pantry", pantrySchema);

  that.getIngredients = function(username, callback) {  
    User.findByUsername(username, function(err, user) {
        if (user) {
          pantryModel.findOne({_id: user.pantryId}, function(err, pantry) {
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

  that.addIngredient = function(username, ingredient, callback) {
    
    User.findByUsername(username, function(err, user) {
        if (user) {
          pantryModel.findOne({_id: user.pantryId}, function(err, pantry) {
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

  that.deleteIngredient = function(ingredient, callback) {

  };

  that.createNewPantry = function(callback) {
    var newPantry = new Pantry({'ingredient': []});
      newPantry.save(function(err) {
        callback(null);
      })
  }

  Object.freeze(that);
  return that;

})();

module.exports = Pantry;