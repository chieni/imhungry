// Primary author: nlucas
var assert = require("assert"); 
var User = require('../models/User');
var mongoose = require('mongoose');

before(function(done) {
    mongoose.connect('mongodb://localhost/test');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Mongoose connection error:'));
  db.once('open', function (callback) {
      mongoose.connection.db.dropDatabase(done);
  });
  });

 after(function(done) {
    mongoose.connection.close();
    done();
  });

describe('User', function() {
  // First populate the user database and then call the methods on it
  // to test the User.js model
  describe('createNewUser', function() {
        it('should be no error creating a new user with unique username and password', function () {
          User.User.createNewUser("myName", "myPassword", 
            function(err) {
              assert.equal(err, null);
              done();
        });
      });
        it('should be no error creating a new user with unique username and password', function () {
          User.User.createNewUser("anotherUser", "pword", 
            function(err) {
              assert.equal(err, null);
              done();
        });
      });
          it('should return an error that the username is taken', function() {
            User.User.createNewUser("myName", "anotherPassword",
              function(err) {
              if(err) throw err;
              done();
            });
        });

      it('user should be the same', function() {
         User.User.findByUsername("myName", function(err, user) {
          assert.equal(user.password, "myPassword");
          done();
      });
    });

  
});

  // This tests a duplicate username entering the system throwing a taken error
  describe('createNewUserDuplicate', function() {
        it('should return an error that the username is taken', function() {
          User.User.createNewUser("myName", "anotherPassword",
          function(err) {
          if(err) throw err;
          done();
        });
      });
    });
  

  // This tests the findByUsername function
  describe('findByUsername test', function() {
      it('user should be the same', function() {
        User.User.findByUsername("myName", function(err, user) {
        assert.equal(user.password, "myPassword");
        done();
      });
    });
  });

  // This tests the verify password functionality on a matched password
  describe('verifyPasswordMatch', function() {
        it('match should be true for a matched password', function() {
             User.User.verifyPassword("myName", "myPassword", 
           function(err, match) {
          assert.equal(match, true);
          done();
        });
      });
  })

  // This tests the verify password functionality on a mismatched password
  describe('verifyPasswordMismatch', function() {
        it('should just check to see if the user was created successfully', function() {
          User.User.createNewUser("mismatch", "firstPW",
           function(err) {
          assert.equal(err, null);
          done();
        }); 
      });
    
        it('should check that the password is a mismatch', function() {
          User.User.verifyPassword("mismatch", "secondPW",
          function(err, match) {
          assert.equal(match, false);
          done();
        });
        
      });
  });
});