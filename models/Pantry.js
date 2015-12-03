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
  ingredients: array of String of ingredient names in this pantry
  */
  var pantrySchema = mongoose.Schema({
    username: String,
    ingredients: [{
      ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
      }
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
          console.log(pantry.ingredients);
          var clone = pantry.ingredients.slice(0);
          (function addToArray() {
            var ingId = clone.splice(0,1)[0];
            console.log(ingId);
            Ingredient.findById(ingId, function(err, ing) {
              pantryIngObjs.push(ing);
              if (err) {
                callback({msg:"Ingredient doesn't exist"});
              }
              if (clone.length == 0) {
                console.log(pantryIngObjs);
                callback(null, pantryIngObjs);
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
      else {
        callback({msg: "Pantry does not exist"});
      }
    });
  }

          // // for (var i = 0; i < pantry.ingredients.length; i++) {
          // //   Ingredient.findById(pantry.ingredients[i], function(err, ing) {
          // //     if (ing) {
          // //       pantryIngObjs.push(ing);
          // //       console.log(pantry.ingredients.length);
          // //       console.log("ind:"+i);
          // //       if (i == pantry.ingredients.length-1) {
          // //         console.log(pantryIngObjs);
          // //         callback(null, pantryIngObjs);
          // //       }
          // //     }
          // //     else {
          // //       callback({msg:"Ingredient doesn't exist"});
          // //     }
          // //   })            
          // // }

          // pantry.ingredients.forEach(function(ingId, index) {
          //     Ingredient.findById(ingId, function(err, ing) {
          //     if (ing) {
          //       pantryIngObjs.push(ing);
          //       console.log(pantry.ingredients.length);
          //       console.log("ind:"+i);
          //       if (i == pantry.ingredients.length-1) {
          //         console.log(pantryIngObjs);
          //         callback(null, pantryIngObjs);
          //       }
          //     }
          //     else {
          //       callback({msg:"Ingredient doesn't exist"});
          //     }
  //         //   })    

  //         })
  //       }
  //       else {
  //         callback(null, []);
  //       }
  //     }
  //     else {
  //       callback({msg: "Pantry does not exist"});
  //     }
  //   });
  // }

/*
Add ingredient to given user's pantry
User cannot add the same ingredient again
  username: String username of specified user
  ingredient: String ingredient name of ingredient to add
  */
  pantrySchema.statics.addIngredient = function(username, ingredientName, callback) {
    var self = this;
    Ingredient.findOne({name:ingredientName}, function(err, ing) {
      if (ing) {
        self.findOne({username: username}, function(err, pantry) {
          if (pantry) {
            var index = -1;
            pantry.ingredients.forEach(function(pantryIng) {
              if (ing.id==pantryIng.id) {
                index = pantry.ingredients.indexOf(pantryIng);
              }
            });
            if (index == -1) {
              pantry.ingredients.push(ing);
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
  ingredient: String name of ingredient to be deleted
  */
  pantrySchema.statics.deleteIngredient = function(username, ingredientId, callback) {
    var index = -1;
    this.findOne({username: username}, function(err, pantry) {
      if (pantry) {
        pantry.ingredients.forEach(function(pantryIng) {
          if (pantryIng.id == ingredientId) {
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