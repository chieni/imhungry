//Primary Author: nlucas
// Data for each User is stored in a database. 

// A User object in the imHungry app.
// Each User object stores a username and password
  var mongoose = require('mongoose');

  var userSchema = mongoose.Schema({
    username: String,
    password: String,
  });

/*
Get user by username
  username: String username of desired user
*/
userSchema.statics.findByUsername = function(username, callback) {
  this.findOne({username: username}, function(err, user) {
    if (err) {
      callback(err, null);
    } else if (!user) {
      callback({msg: 'user does not exist'}, null);
    } else {
      callback(null, user);
    }
  });
}

/*
Verify the password is correct for a user
  username: String username of specified user
  candidatepw: String submitted password
*/
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
Create a new user
  params:
    username String desired username for new user, must be unique
    password String desired password for new user
    callback function to call
*/
userSchema.statics.createNewUser = function(username, password, callback) {
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

exports.User = mongoose.model('User', userSchema);