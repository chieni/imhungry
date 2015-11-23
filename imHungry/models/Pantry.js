// Data for each user's Pantry is stored in
// a database. 



// A Pantry object in the imHungry app.
// Each Pantry object stores zero or more ingredients and contains a unique ID.
//var Pantry = (function Pantry() {

//  var that = Object.create(Pantry.prototype);
var mongoose = require('mongoose');
var User = require('../models/User');

var pantrySchema = mongoose.Schema({
  username: String,
  ingredients: [String] //will replace with Ingredient object later
});

  //var pantryModel = mongoose.model("Pantry", pantrySchema);

 /* that.getIngredients = function(username, callback) {  
    console.log('in get ingredients');
    User.findByUsername(username, function(err, user) {
      console.log('calling findbyusername');
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
    }; */

 /* pantrySchema.statics.getIngredients = function(username, callback) {  
    console.log('in get ingredients');
    var self = this;
    User.User.findByUsername(username, function(err, user) {
      console.log(username);
        if (user) {
          console.log('found a user');
          self.findOne({_id: user.pantryId}, function(err, pantry) {
            if (pantry) {
              console.log('there a pantry');
              callback(null, pantry.ingredients);
            }
            else {
              console.log('no pantry');
              callback({msg: "Pantry does not exist"});
            }
          })
        }
        else {
          console.log('found no user');
          callback({ msg : 'Invalid user.'});
        }
      });
    } */

pantrySchema.statics.getIngredients = function(username, callback) {
  console.log(username);
  this.findOne({username: username}, function(err, pantry) {
    if (pantry) {
      callback(null, this.ingredients);
    } else {
      console.log("pantry does not exist");
      callback({msg: "Pantry does not exist"});
    }
  });
}


/*
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
*/
  pantrySchema.statics.addIngredient = function(username, ingredient, callback) {
    var self = this;
    User.User.findByUsername(username, function(err, user) {
        if (user) {
          self.findOne({_id: user.pantryId}, function(err, pantry) {
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
  }

/*
  that.deleteIngredient = function(ingredient, callback) {

  };
  */
/*
  that.createNewPantry = function(callback) {
    var newPantry = new Pantry({'ingredient': []});
      newPantry.save(function(err) {
        callback(null);
      })
  }
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

//  Object.freeze(that);
 // return that;

//})();
exports.Pantry = mongoose.model('Pantry', pantrySchema);
//module.exports = Pantry;