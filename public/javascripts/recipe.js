// Wrap in an immediately invoked function expression.
(function() {
  /*
    Loads recipe view for recipe when clicked
  */
  $(document).on('click', '.recipe', function(evt) {
      var item = $(this);
      var recipe_id = item.data('recipeid');
      $.get('/recipe/' + recipe_id, function(response, res) {
        
        loadPage('recipeView', { recipe: response.content, currentUser: currentUser });
      });
  });

})();