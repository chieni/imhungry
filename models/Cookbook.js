// a database. 

// A Cookbook object in the imHungry app.
// Each Pantry object stores zero or more ingredients and contains a unique ID.
var mongoose = require('mongoose');
var User = require('../models/User');
var Recipe = require('../models/Recipe');

/*
Schema for cookbook
  username: String username of user who owns this pantry
  ingredients: array of String of ingredient names in this pantry
*/
var cookbookSchema = mongoose.Schema({
  username: String,
  recipes: []
});

/*
Get all the recipes of the cookbook of the given user
  username: String username of specified user
*/
cookbookSchema.statics.getRecipes = function(username, callback) {
  this.findOne({username: username}, function(err, cookbook) {
    if (cookbook) {
      callback(null, cookbook.recipes);
    } else {
      callback({msg: "Cookbook does not exist"});
    }
  });
}

/*
Add recipe to given user's cookbook
User cannot add the same recipe again
  username: String username of specified user
  recipe: id of recipe to add
*/
cookbookSchema.statics.addRecipe = function(username, recipeId, callback) {
  this.findOne({username: username}, function(err, cookbook) {
    if (cookbook) {
      Recipe.findOne({_id: recipeId}, function(err, recipe) {
        if(recipe) {
            cookbook.recipes.push(recipe);
            cookbook.save(function(err) {
              if(err) {
                callback({msg:"error adding recipe"});
              }
              else {
                callback(null);
              }
            });
         
        }
        else {
          callback({msg:"recipe not found"});
        }   
      });
    }
    else {
      callback({msg: "Cookbook does not exist"});
    }
  });
}

/*
Delete recipe from given user's cookbook
  username: String username of specified user
  ingredient: String name of ingredient to be deleted
*/
cookbookSchema.statics.deleteRecipe = function(username, recipeId, callback) {
  console.log("fuuu");
  console.log(username);
   this.findOne({username: username}, function(err, cookbook) {
    console.log("ok we here");
    if (cookbook) {
      console.log("fuck you");
      
          var index = -1;
          var count = 0;
          cookbook.recipes.forEach(function(recipe) {
            if (recipe._id.toString() === recipeId.toString()) {
              index = count;
            }
            count += 1;
          });
          console.log(index);
          if (index > -1) {
            cookbook.recipes.splice(index,1);
          }
          cookbook.save(function(err) {
            if (err) {
              callback({msg: 'Error saving cookbook'}, null);
            }
            else {
              callback(null, cookbook);
            }
          });

        }
        else {
          callback({msg: 'Cookbook does not exist'}, null);
        }
  });

};

  
/*
Create a new cookbook for specified user
Cookbook is initially empty
  username: String username of specified user
*/
cookbookSchema.statics.createNewCookbook = function(username, callback) {
  this.create({username: username, recipes: []},
    function(error, record) {
        if (error) {
          callback(error);
        } else {
          callback(null);
        }
      });
}

exports.Cookbook = mongoose.model('Cookbook', cookbookSchema);