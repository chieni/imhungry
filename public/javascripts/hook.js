// Wrap in an immediately invoked function expression.
(function() {

  $(document).on('submit', '#hook-search-form', function(evt) {
      evt.preventDefault();
      var ingredients = $("#hook-ingr-input").val();
      $.post(
          '/search',
          {ingredients: ingredients}
      ).done(function(response) {
      	//console.log(response.content.recipes)
		 loadPage('search', {currentUser: null, ingredients: response.content.ingredients, recipes: response.content.recipes, searched: true});
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });

})();