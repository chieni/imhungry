// Data for each user's Pantry is stored in
// a database. 

// A Pantry object in the imHungry app.
// Each Pantry object stores zero or more ingredients and contains a unique ID.
var mongoose = require('mongoose');
var User = require('../models/User');
var Ingredient = require('../models/Ingredient');

/*
Schema for pantry
  username: String username of user who owns this pantry
  ingredients: array of ingredient objects and String amount of ingredients that this user owns
  */
  var pantrySchema = mongoose.Schema({
    username: String,
    ingredients: [{
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
      },
      amount: String
    }]
  });

/*
Get all the ingredients in the pantry of the given user
  username: String username of specified user
  */
  pantrySchema.statics.getIngredients = function(username, callback) {
    this.findOne({username: username}, function(err, pantry) {
      if (pantry) {
        if (pantry.ingredients.length > 0) {
          var pantryIngObjs = [];
          var clone = pantry.ingredients.slice(0);
          (function addToArray() {
            var poppedIng = clone.splice(0,1)[0];
            var ingId = poppedIng.ingredient;
            var ingAmt = poppedIng.amount;
            Ingredient.findById(ingId, function(err, ing) {
              pantryIngObjs.push({ingredient:ing, amount:ingAmt});
              if (err) {
                callback({msg:"Ingredient doesn't exist"});
              }
              if (clone.length == 0) {
                callback(null, pantryIngObjs);
              }
              else {
                setTimeout(addToArray, 0);
              }
            })      
          })();
        }
        else {
          callback(null, []);
        }
      }
      else {
        callback({msg: "Pantry does not exist"});
      }
    });
  }

/*
Add ingredient to given user's pantry
User cannot add the same ingredient again
  username: String username of specified user
  ingredientName: String ingredient name of ingredient to add
  ingredientAmt: String amount of ingredient that is being added
  */
  pantrySchema.statics.addIngredient = function(username, ingredientName, ingredientAmt, callback) {
    var self = this;
    Ingredient.findOne({name:ingredientName}, function(err, ing) {
      if (ing) {
        self.findOne({username: username}, function(err, pantry) {
          if (pantry) {
            var index = -1;
            pantry.ingredients.forEach(function(pantryIng) {
              if (ing.id==pantryIng.ingredient) {
                index = pantry.ingredients.indexOf(pantryIng);
              }
            });
            if (index == -1) {
              pantry.ingredients.push({ingredient: ing, amount: ingredientAmt});
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
              callback({msg: "Ingredient already in pantry."});
            }    
          }
          else {
            callback({msg: "Pantry does not exist"});
          }
        });
      }
      else {
        callback({msg: "This ingredient does not exist, please pick one from the drop-down list."});
      }
    });
  }

/*
Delete ingredient from given user's pantry
  username: String username of specified user
  ingredientId: ObjectId of ingredient to be deleted
  */
  pantrySchema.statics.deleteIngredient = function(username, ingredientId, callback) {
    var index = -1;
    this.findOne({username: username}, function(err, pantry) {
      if (pantry) {
        pantry.ingredients.forEach(function(pantryIng) {
          if (pantryIng.ingredient == ingredientId) {
            index = pantry.ingredients.indexOf(pantryIng);
          }
        });
        if (index > -1) {
          pantry.ingredients.splice(index,1);
        }
        else {
          callback({ msg : 'Ingredient does not exist in pantry.'});
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
Edit ingredient amount of a given ingredient of a given user
  username: String username of specified user
  ingredientId: ObjectId of ingredient whose amount is to be edited
  ingredientAmt: String of the new amount
  */
  pantrySchema.statics.editIngredientAmount = function(username, ingredientId, ingredientAmt, callback) {
    var index = -1;
    this.findOne({username: username}, function(err, pantry) {
      if (pantry) {
        pantry.ingredients.forEach(function(pantryIng) {
          if (pantryIng.ingredient == ingredientId) {
            index = pantry.ingredients.indexOf(pantryIng);
          }
        });
        if (index > -1) {
          pantry.ingredients[index].amount = ingredientAmt;
        }
        else {
          callback({ msg : 'Ingredient does not exist in pantry.'});
        }
        pantry.save(function(err) {
          if (err) {
            callback({msg:"Error saving pantry"});
          }
          else {
            callback(null, ingredientAmt);
          }
        });
      }
      else {
        callback({msg: "Pantry does not exist"});
      }
    });
  }

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

  var getValidIngredients = function(ingredientsList, callback) {
    if (ingredientsList.length > 0) {
      var ingredientsObjs = [];
      var clone = ingredientsList.slice(0);
      (function addToArray() {
        var poppedIng = clone.splice(0,1)[0];
        Ingredient.findOne({name: poppedIng}, function(err, ing) {
          
          if (err) {
            callback({msg:"Ingredient doesn't exist"});
          } 

          if (ing != null) {
            ingredientsObjs.push({ingredient: ing});
          }

          if (clone.length == 0) {
            callback(null, ingredientsObjs);
          }
          else {
            setTimeout(addToArray, 0); //addToArray();
          }
        })      
      })();
    }
    else {
      callback(null, []);
    }
  }

  /*
  Create a new pantry for a specified user who entered via the hook
  Pantry has ingredients that the user entered from the anonymous pantry
    username: String username of specified user
    ingredients: [String] ingredients from
  */
  pantrySchema.statics.createNewPantryWithIngredients = function(username, ingredients, callback) {
    var ingredientsList = ingredients.split(',');
    var self = this;
    getValidIngredients(ingredientsList, function(err, ingredientsObjs){
      self.create({username: username, ingredients: ingredientsObjs},
        function(error, record) {
          if (error) {
            callback(error);
          } else {
            console.log("create pantry")
            console.log(record)
            callback(null);
          }
        });
    });
  }

  exports.Pantry = mongoose.model('Pantry', pantrySchema);