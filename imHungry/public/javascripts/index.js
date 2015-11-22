


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
This method loads the home page.  If logged in, it will load
the fritter feed page.  If not it will load the sign in/register page.
*/
var loadHomePage = function() {
	if (currentUser) {
		loadSearchPage();
	} else {
		loadPage('index');
	}
};

/*
This method loads the fritter feed given that a user is already logged in
by issuing a get requests for all freets
*/
var loadSearchPage = function() {
	console.log("load search");
	// $.get('/pantry', function(response) {
	// 	loadPage('search', {currentIngredients: response.content.ingredients });
	// })
	loadPage('search');
};

/*
This method populates the field currentUser and calls loadPage
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