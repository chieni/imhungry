// Wrap in an immediately invoked function expression.
(function() {
  /*
    Loads recipe view for recipe when clicked
  */
  $(document).on('click', '.recipe', function(evt) {
      var item = $(this);
      var recipe_id = item.data('recipeid');
      var serving_size = item.data('recipesize');

      /*$.get('/recipe/' + recipe_id, function(response, res) {
        
        loadPage('recipeView', { recipe: response.content, currentUser: currentUser });
      });*/

      $.post('/recipe/' + recipe_id,
        {servingSize: serving_size}
      ).done(function(response) {
        loadPage('recipeView', { recipe: response.content, currentUser: currentUser });
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });

      /*$.get('/recipe/' + recipe_id,
      {servingSize: 1}
      ).done(function(response, res) {  
        loadPage('recipeView', { recipe: response.content, currentUser: currentUser });
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });*/
  });

})();