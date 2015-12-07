// Wrap in an immediately invoked function expression.
(function() {

  /*
  Directs the user from the hook homepage to the anonymous search page, using the comma separated ingredient values they entered
  to enanct a recipe search
  */
  $(document).on('submit', '#hook-search-form', function(evt) {
      evt.preventDefault();
      var ingredients = $("#hook-ingr-input").val();
      var size = $("#hook-number-input").val();
      if (size>0) {
        if (ingredients.length < 1) {
        } else {
        $.post(
            '/search',
            {ingredients: ingredients}
        ).done(function(response) {
          $('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ),url("../imgs/food.jpg") no-repeat center center fixed'});
          $('body').css('background-size', 'cover');
          loadPage('searchAnon', {currentUser: null, servingSize: size, ingredients: response.content.ingredients, recipes: response.content.recipes, searched: true});
        }).fail(function(responseObject) {
            var response = $.parseJSON(responseObject.responseText);
            $('.error').text(response.err);
        });
        }
      }
      else {
        $('.anon-sizing-error').text('Serving size must be a positive number');
      }
      
  });
})();