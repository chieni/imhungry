// Data for each User is stored in
// a database. 


var mongoose = require('mongoose');

// A User object in the imHungry app.
// Each User object stores a username and password





var userSchema = mongoose.Schema({
  username: String,
  password: String
});

userSchema.statics.findByUsername = function(username, callback) {
  
  User.findOne({username: username}, function(err, user) {
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
userSchema.statics.verifyPassword = function(username, candidatepw, callback) {
   User.find({username: username}, function(err, users) {
    if(err) {
      callback(null, false)
    }
    else {
      User.findOne({username: username}, function(err, user) {
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

userSchema.statics.createNewUser = function (username, password, callback) {
	console.log("entered");
  User.find({username: username}, function(err, users) {
    if (err) {
        callback({ taken: true });
      } 
    else {
      var newUser = new User({'username': username,
                      'password': password});
      newUser.save(function(err) {
        callback(null);
      })
    }
})
  
};

var User = mongoose.model('User', userSchema);
module.exports = User;
