Handlebars.registerPartial('recipe', Handlebars.templates['recipe']);
Handlebars.registerPartial('header', Handlebars.templates['header']);
Handlebars.registerPartial('cookbook', Handlebars.templates['cookbook']);
Handlebars.registerPartial('cookbookRecipe', Handlebars.templates['cookbookRecipeView']);
Handlebars.registerPartial('anonHeader', Handlebars.templates['anonHeader']);
/*
The following helper is registered for handlebars so as to be able to compare
two items in handlebars 
For example:
	- if(itemA > itemB){body} translates to {{#compare itemA itemB operator=">"}}body{{/compare}}
*/
Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {
		if (arguments.length < 3)
			throw new Error("Handlebars Helper 'compare' needs 2 parameters");

		var operator = options.hash.operator || "==";
		
		var operators = {
			'==':		function(l,r) { return l == r; },
			'===':	function(l,r) { return l === r; },
			'!=':		function(l,r) { return l != r; },
			'<':		function(l,r) { return l < r; },
			'>':		function(l,r) { return l > r; },
			'<=':		function(l,r) { return l <= r; },
			'>=':		function(l,r) { return l >= r; },
		}
		if (!operators[operator])
			throw new Error("Unknown Operator");
		var result = operators[operator](lvalue,rvalue);
		if( result ) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});
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
		$('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../imgs/yummy-dinner-party.jpg") no-repeat center center fixed'});
		$('body').css('background-size', 'cover');
		loadPage('hook')
	}
};

/*
Load search page with pantry
*/
var loadSearchPage = function() {
	$('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url("../imgs/food.jpg") no-repeat center center fixed'});
	$('body').css('background-size', 'cover');
	$.get('/pantry', function(response) {
		loadPage('search', {currentUser: currentUser, ingredients: response.content.ingredients });
	});
};
/*
Load Cookbook Page
*/
var loadCookbookPage = function() {
	loadCookbookRecipes();
	loadPage('cookbook')
}

/*
Load recipe search results to search page
*/
var loadSearchResults = function() {
	$.get('/pantry', function(response) {
		loadPage('search', {currentUser: currentUser, ingredients: response.content.ingredients, loading: true });
		$.get('/search').done(function(resp){
			loadPage('search', {currentUser: currentUser, ingredients: response.content.ingredients, recipes: resp.content.recipes, searched: true, loading:false, more: 1, moreToLoad: resp.content.moreToLoad});
			if (resp.content.moreToLoad) {
				$("#load-more-btn").removeAttr('disabled');
			}
		}).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
	});
};

/*
Load additional recipe search results to search page
*/
var loadMoreSearchResults = function(formData, more, servingSize) {
	$.get('/pantry', function(response) {
		$.post('/search/more',
			{more: more}
			).done(function(resp){
			loadPage('search', {currentUser: currentUser, ingredients: response.content.ingredients, recipes: resp.content.recipes, searched: true, loading:false, more: more+1, moreToLoad: resp.content.moreToLoad});
			if (resp.content.moreToLoad) {
				$("#load-more-btn").removeAttr('disabled');
			}
		}).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
	});
};

/*
Load recipes for cookbook
*/
var loadCookbookRecipes = function(){
	$.get('/cookbook/recipes', function(response) {
		loadPage('cookbook', {recipes: response.content.recipes, currentUser: response.content.currentUser});
	}).fail(function(responseObject) {
		var response = $.parseJSON(responseObject.responseText);
	});
}

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
This method will load the cookbook page when the cookbook link is clicked
*/
$(document).on('click', '#cookbook-btn', function(evt) {
	evt.preventDefault();
	loadCookbookPage();
})

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
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../imgs/yummy-dinner-party.jpg") no-repeat center center fixed'});
	$('body').css('background-size', 'cover');
	loadPage('index');
});

/*
This method will load the page with the register template
whenever the register button is pressed.
*/
$(document).on('click', '#register-btn', function(evt) {
	evt.preventDefault();
	$('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../imgs/yummy-dinner-party.jpg") no-repeat center center fixed'});
	$('body').css('background-size', 'cover');
	loadPage('register');
});