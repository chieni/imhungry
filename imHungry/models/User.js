// Data for each User is stored in a database. 


// A User object in the imHungry app.
// Each User object stores a username, password, and unique pantry ID

var User = (function User() {

  var that = Object.create(User.prototype);
  var mongoose = require('mongoose');
  var Pantry = require('../models/Pantry');

  var userSchema = mongoose.Schema({
    username: String,
    password: String,
    pantryId: mongoose.Schema.Types.ObjectId
  });

  var userModel = mongoose.model("User", userSchema);

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

/*
This is a public function that verifies the password of a user at login
@params: username - string that is the username
  candidatepw - string that the user types in as a password
  callback - function called when verifyPassword is executed
  */
  that.verifyPassword = function(username, candidatepw, callback) {
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
 };

/*
This is a public function that creates a new user in the system
It stores the username and the password.
Additionally, this stores all the usernames in the username array
@params: username - string that is username
  password - string that is password
  callback - function called when createNewUser is executed
  */

  that.createNewUser = function (username, password, callback) {
    console.log("entered");
    userModel.find({username: username}, function(err, users) {
      if (err) {
        callback({ taken: true });
      } 
      else {
        var newUser = new User({'username': username,
          'password': password});
        newUser.save(function(err) {
          callback(null);

          Pantry.createNewPantry();
        })
      }
    })

  };

  Object.freeze(that);
  return that;
})();

module.exports = User;