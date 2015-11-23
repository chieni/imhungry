// Data for each user's Pantry is stored in
// a database. 

// A Pantry object in the imHungry app.
// Each Pantry object stores zero or more ingredients and contains a unique ID.
var mongoose = require('mongoose');
var User = require('../models/User');

/*
Schema for pantry
  username: String username of user who owns this pantry
  ingredients: array of String of ingredient names in this pantry
*/
var pantrySchema = mongoose.Schema({
  username: String,
  ingredients: [String]
});

/*
Get all the ingredients in the pantry of the given user
  username: String username of specified user
*/
pantrySchema.statics.getIngredients = function(username, callback) {
  this.findOne({username: username}, function(err, pantry) {
    if (pantry) {
      callback(null, pantry.ingredients);
    } else {
      callback({msg: "Pantry does not exist"});
    }
  });
}

/*
Add ingredient to given user's pantry
User cannot add the same ingredient again
  username: String username of specified user
  ingredient: String ingredient name of ingredient to add
*/
pantrySchema.statics.addIngredient = function(username, ingredient, callback) {
  this.findOne({username: username}, function(err, pantry) {
    if (pantry) {
      var index = pantry.ingredients.indexOf(ingredient);
      if (index == -1) {
        pantry.ingredients.push(ingredient);
        pantry.save(function(err) {
          if (err) {
            callback({msg:"error adding ingredient"});
          }
          else {
            callback(null);
          }
        });
      }
      else {
        callback({msg: "Ingredient already in pantry"});
      }    

    }
    else {
      callback({msg: "Pantry does not exist"});
    }
  });
}

/*
Delete ingredient from given user's pantry
  username: String username of specified user
  ingredient: String name of ingredient to be deleted
*/
pantrySchema.statics.deleteIngredient = function(username, ingredient, callback) {
  this.findOne({username: username}, function(err, pantry) {
    if (pantry) {
        var index = pantry.ingredients.indexOf(ingredient);
        if (index > -1) {
          pantry.ingredients.splice(index,1);
        }
        else {
          callback({ msg : 'Invalid ingredient.'});
        }
        pantry.save(function(err) {
          if (err) {
            callback({msg:"Error saving pantry"});
          }
          else {
            callback(null);
          }
        });
    }
    else {
      callback({msg: "Pantry does not exist"});
    }
  });

};
  
/*
Create a new pantry for specified user
Pantry is initially empty
  username: String username of specified user
*/
pantrySchema.statics.createNewPantry = function(username, callback) {
  this.create({username: username, ingredients: []},
    function(error, record) {
        if (error) {
          callback(error);
        } else {
          callback(null);
        }
      });
}

exports.Pantry = mongoose.model('Pantry', pantrySchema);