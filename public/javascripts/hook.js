// Wrap in an immediately invoked function expression.
(function() {

  $(document).on('submit', '#hook-search-form', function(evt) {
      evt.preventDefault();
      var ingredients = $("#hook-ingr-input").val();
      $.post(
          '/search',
          {ingredients: ingredients}
      ).done(function(response) {
        $('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url("../imgs/food.jpg") no-repeat center center fixed'});
        $('body').css('background-size', 'cover');
		    loadPage('searchAnon', {currentUser: null, ingredients: response.content.ingredients, recipes: response.content.recipes, searched: true});
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });

})();