// Wrap in an immediately invoked function expression.
(function() {
  /*
    Submits the search query when a user clicks on "Scavenge" given the items in his/her pantry.
    This returns all recipes in our database the user can create given his/her pantry.
  */
  $(document).on('submit', '#search-form', function(evt) {
      evt.preventDefault();
      var formData = helpers.getFormData(this);
      loadSearchResults(formData);
  });

    $(document).on('submit', '#anon-search-form', function(evt) {
      evt.preventDefault();
      var formData = helpers.getFormData(this);
      
		$.get('/search', function(response) {
			$.get('/pantry').done(function(resp){
				loadPage('search', {currentUser: currentUser, ingredients: resp.content.ingredients, recipes: response.content.recipes, searched: true, size: formData.servingsize});
			}).fail(function(responseObject) {
	          var response = $.parseJSON(responseObject.responseText);
	          $('.error').text(response.err);
	      });
		});

  });
})();