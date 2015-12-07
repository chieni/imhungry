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
  });

  /*
  Submits the search query for an anonymous user, from the anonymous search page. 
  */
  $(document).on('submit', '#anon-search-form', function(evt) {
    evt.preventDefault();

    var ingredients = $(".container").attr('data-ingredientsList-id');
    var ingredientsList = [];
    if (ingredients.length > 0) {
      ingredientsList = ingredients.split(",");
      var cleanIngredientsList = [];
      ingredientsList.forEach(function(i){
        if (i.length > 0) {
          cleanIngredientsList.push(i);
        }
      });
      loadPage('searchAnon', {currentUser: null, ingredients: cleanIngredientsList, loading: true});
      $.post(
          '/search',
          {ingredients: ingredients}
      ).done(function(response) {
        loadPage('searchAnon', {currentUser: null, ingredients: response.content.ingredients, recipes: response.content.recipes, searched: true, loading: false});
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });

    } else {
      $('.error').text("Please add ingredients to pantry!");
    }



  });
})();