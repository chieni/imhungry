Handlebars.registerPartial('recipe', Handlebars.templates['recipe']);
Handlebars.registerPartial('header', Handlebars.templates['header']);

// See handlebarsjs.com for details. Here, we register
// a re-usable fragment of HTML called a "partial" which
// may be inserted somewhere in the DOM using a function
// call instead of manual insertion of an HTML String.
//Handlebars.registerPartial('freet', Handlebars.templates['freet']);

// Global variable set when a user is logged in. Note
// that this is unsafe on its own to determine this: we 
// must still verify every server request. This is just 
// for convenience across all client-side code.
currentUser = undefined;

// A few global convenience methods for rendering HTML
// on the client. Note that the loadPage methods below
// fills the main container div with some specified 
// template based on the relevant action.

var loadPage = function(template, data) {
	data = data || {};
	$('#main-container').html(Handlebars.templates[template](data));
};

/*
Load home search page if user is logged in
otherwise load index page
*/
var loadHomePage = function() {
	if (currentUser) {
		loadSearchPage();
	} else {
		loadPage('index');
	}
};

/*
Load search page with pantry
*/
var loadSearchPage = function() {
	$.get('/pantry', function(response) {
		loadPage('search', {currentUser: currentUser, ingredients: response.content.ingredients });
	});
};

/*
Load recipe search results to search page
*/
var loadSearchResults = function() {
	$.get('/search', function(response) {
		$.get('/pantry').done(function(resp){
			loadPage('search', {currentUser: currentUser, ingredients: resp.content.ingredients, recipes: response.content.recipes, searched: true});
		}).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
	});
};

/*
This method populates the field currentUser and calls loadHomePage
at all times while the app is running.
*/
$(document).ready(function() {
	$.get('/users/current', function(response) {
		if (response.content.loggedIn) {
			currentUser = response.content.user;
		}
		loadHomePage();
	});
});

/*
This method will load the home-page when the home link is clicked
*/
$(document).on('click', '#home-link', function(evt) {
	evt.preventDefault();
	loadHomePage();
});

/*
This method will load the page with the signin template 
whenever the sign in button is pressed.
*/
$(document).on('click', '#signin-btn', function(evt) {
	loadPage('signin');
});

/*
This method will load the page with the register template
whenever the register button is pressed.
*/
$(document).on('click', '#register-btn', function(evt) {
	loadPage('register');
});