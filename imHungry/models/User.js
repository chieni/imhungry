// Data for each User is stored in a database. 


// A User object in the imHungry app.
// Each User object stores a username, password, and unique pantry ID

//var User = (function User() {

  //var that = Object.create(User.prototype);
  var mongoose = require('mongoose');
  //var Pantry = require('../models/Pantry');

  var userSchema = mongoose.Schema({
    username: String,
    password: String,
  });

  //var userModel = mongoose.model("User", userSchema);
/*
  that.findByUsername = function(username, callback) {

    userModel.findOne({username: username}, function(err, user) {
      if (err) {
        callback({ msg: 'No such user!' });
      }
      else {
        callback(null, user);
      }
    });
  };
*/
userSchema.statics.findByUsername = function(username, callback) {
  this.findOne({username: username}, function(err, user) {
    console.log('in findbyusername');
    if (err) {
      console.log('in err');
      callback(err, null);
    } else if (!user) {
      console.log('no user');
      callback({msg: 'user does not exist'}, null);
    } else {
      console.log('yes user');
      callback(null, user);
    }
  });
}

/*
This is a public function that verifies the password of a user at login
@params: username - string that is the username
  candidatepw - string that the user types in as a password
  callback - function called when verifyPassword is executed
  */
  /*that.verifyPassword = function(username, candidatepw, callback) {
   userModel.find({username: username}, function(err, users) {
    if(err) {
      callback(null, false)
    }
    else {
      userModel.findOne({username: username}, function(err, user) {
        if (err) {
          callback(null, false);
        }
        else {
          if (candidatepw === user.password) {
            callback(null, true);
          } else {
            callback(null, false);
          };
        };
      });

    };
  });
 };*/

 userSchema.statics.verifyPassword = function(username, candidatepw, callback) {
  this.findOne({username: username}, 'password', function(err, user) {
    if (!user) { // user does not exist
      callback(null, false);
    } else if (candidatepw == user.password) { // password matches
      callback(null, true);
    } else { // password does not match
      callback(null, false);
    }
    });
}

/*
This is a public function that creates a new user in the system
It stores the username and the password.
Additionally, this stores all the usernames in the username array
@params: username - string that is username
  password - string that is password
  callback - function called when createNewUser is executed
  */
/*
  that.createNewUser = function (username, password, callback) {
    console.log("entered");
    userModel.findOne({username: username}, function(err, user) {
      if (user == null) {
      //  var newPantryId = Pantry.createNewPantry();
        var newUser = userModel({
          username: username,
          password: password,
          //pantryId: something
        });
        newUser.save(function(err) {
          if (err) {
            callback({msg:"error saving user"});
          }
          else {
            callback(null, newUser);
          }
        })
      }
      else {
        callback({taken:true});
      }
    })

  };
*/
  /*
Create a new user
  params:
    username String desired username for new user, must be unique
    password String desired password for new user
    callback function to call
*/
userSchema.statics.createNewUser = function(username, password, pantryId, callback) {
  var self = this;
  self.findOne({username: username}, function(err, user) {
    if (err) {
      callback(err);
    } else if (user) {
      callback({taken: true});
    } else {

      self.create({username: username, password: password},
        function(error, record) {
          if (error) {
            callback(error);
          } else {
            callback(null);
          }
        });
    }
  });
}


 // Object.freeze(that);
  //return that;
//})();
exports.User = mongoose.model('User', userSchema);
//module.exports = User;