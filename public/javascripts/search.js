// Wrap in an immediately invoked function expression.
(function() {
  /*
    Submits the search query when a user clicks on "Scavenge" given the items in his/her pantry.
    This returns all recipes in our database the user can create given his/her pantry.
  */
  $(document).on('submit', '#search-form', function(evt) {
      evt.preventDefault();
      loadSearchResults();
  });

  $(document).on('submit','#load-more-form', function(evt) {
  	evt.preventDefault();
  	$(this).append("<div class='little-spinner'></div>");
  	var more = $(this).data('more');
  	more += 1;
  	var formData = helpers.getFormData(this);
  	loadMoreSearchResults(formData, more);
  })

    $(document).on('submit', '#anon-search-form', function(evt) {
      evt.preventDefault();
      var formData = helpers.getFormData(this);
      var ingredientsList = $(".container").attr('data-ingredientsList-id');
   
      $.post(
          '/search',
          {ingredients: ingredientsList}
      ).done(function(response) {
      	console.log("done")
		    loadPage('searchAnon', {currentUser: null, ingredients: response.content.ingredients, recipes: response.content.recipes, searched: true});
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });


  });
})();