var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
require('handlebars/runtime');

//Set up Mongoose
var mongoose = require('mongoose');

// Import route handlers
var index = require('./routes/index');
var users = require('./routes/users');
var pantry = require('./routes/pantry');
var search = require('./routes/search');
var recipe = require('./routes/recipe');
var cookbook = require('./routes/cookbook');

// Import imHungry model
var User = require('./models/User');
var Pantry = require('./models/Pantry');
var Ingredient = require('./models/Ingredient');
var Recipe = require('./models/Recipe');
var Cookbook = require('./models/Cookbook');
// Connect to either the MONGOLAB_URI or to the local database.
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/imHungry');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("database connected");
    // Comment the two lines below out if already run
     insertRecipes(db);
     insertIngredients(db);
  });

var allIngredients = [];
var uniqueIngredients = [];

/*
Adds all parsed recipes to the database.
The last recipe is designated by the console logging "recipe 30800".
*/
var insertRecipes = function (db) {
  for (var i = 1200; i < 30900; i+=100) {
   console.log("recipe " + i);
   var recipes = require("./recipe_data/json-files/recipes" + String(i) + "-" + String(i+99)+ ".json");
   recipes.forEach(function (recipe) {
      var r = new Recipe(recipe);
      r.save(function (err) {
      });
      recipe.ingredients.forEach(function (ingName) {
        allIngredients.push(ingName);
      });
    })
  }
}

/*
Adds all unique ingredients pulled from the recipes to the database.
The last ingredient to be added is designated by the console logging "ingredient 6039".
*/
var insertIngredients = function(db) {
  allIngredients.forEach(function(ing){
    if (uniqueIngredients.indexOf(ing) == -1) uniqueIngredients.push(ing);
  });

  uniqueIngredients.forEach(function(ing, index) {
    var i = new Ingredient({name: ing});
    i.save(function (err) {
      console.log("ingredient " + index);
    });
  });
}

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret : '6170', resave : true, saveUninitialized : true }));




// Authentication middleware. This function
// is called on _every_ request and populates
// the req.currentUser field with the logged-in
// user object based off the username provided
// in the session variable (accessed by the
// encrypted cookied).
app.use(function(req, res, next) {
  if (req.session.username) {
    User.User.findByUsername(req.session.username, 
      function(err, user) {
        if (user) {
          req.currentUser = user;
          Pantry.Pantry
        } else {
          req.session.destroy();
        }
        next();
      });
  } else {
    next();
  }
});

// Map paths to imported route handlers
app.use('/', index);
app.use('/users', users);
app.use('/pantry', pantry);
app.use('/search', search);
app.use('/recipe', recipe);
app.use('/cookbook', cookbook);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
