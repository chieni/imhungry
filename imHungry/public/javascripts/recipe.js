// Wrap in an immediately invoked function expression.
(function() {
  /*
    Submits sign-in information on click and logs in user (if info is valid)
  */

  $(document).on('click', '.recipe', function(evt) {
      var item = $(this);
      console.log(item.data('recipeid'))
      var recipe_id = item.data('recipeid');
      $.get('/recipe/' + recipe_id, function(response) {
        console.log(response.content)
        //loadPage('recipe', { recipe: response.content, currentUser: currentUser });
      });
  });

})();