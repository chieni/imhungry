// Wrap in an immediately invoked function expression.
(function() {
  /*
    Loads recipe view for recipe when clicked
  */
  $(document).on('click', '.recipe', function(evt) {
      var item = $(this);
      var recipe_id = item.data('recipeid');
      var serving_size = item.data('recipesize');
      $.post('/recipe/' + recipe_id,
        {servingSize: serving_size}
      ).done(function(response) {
        loadPage('recipeView', { recipe: response.content.recipe, currentUser: currentUser, displayButton: response.content.displayButton, fromCookbook: false });
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });

  /*
    Loads recipe view for recipe in cookbook when clicked
  */
  $(document).on('click', '.cookbookRecipe', function(evt) {
      var item = $(this);
      var recipe_id = item.data('recipeid');
      var serving_size = item.data('recipesize');
      $.post('/recipe/' + recipe_id,
        {servingSize: serving_size}
      ).done(function(response) {
        loadPage('recipeView', { recipe: response.content.recipe, currentUser: currentUser, displayButton: response.content.displayButton, fromCookbook: true });
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });


  $(document).on('submit', '#scale-form', function(evt) {
    evt.preventDefault();
    var item = $(this);
   // var recipe_id = $("container").attr('data-recipeid');
    var recipe_id = item.data('recipeid');
    var formData = helpers.getFormData(this);
    $.post('/recipe/' + recipe_id,
      {servingSize: formData.servingsize}
    ).done(function(response) {
      loadPage('recipeView', { recipe: response.content.recipe, currentUser: currentUser, displayButton: response.content.displayButton });
    }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
    });
  });
  $(document).on('click', '.back-to-search', function(evt) {
      evt.preventDefault();
      var formData = helpers.getFormData(this);
      loadSearchResults(formData);
  });

  $(document).on('click', '.back-to-cookbook', function(evt) {
      evt.preventDefault();
      loadCookbookPage();
  });

  $(document).on('submit', '#rating-form', function(evt) {
    evt.preventDefault();
    var item = $(this);
    formData = helpers.getFormData(this);
    rateForm(item, formData.rating);
  });

  $(document).on('click', '#one-star', function(evt) {
    evt.preventDefault();
    var item = $(this);
    rateForm(item, 1);
  });

  $(document).on('click', '#two-star', function(evt) {
    evt.preventDefault();
    var item = $(this);
    rateForm(item, 2);
  });

  $(document).on('click', '#three-star', function(evt) {
    evt.preventDefault();
    var item = $(this);
    rateForm(item, 3);
  });

  $(document).on('click', '#four-star', function(evt) {
    evt.preventDefault();
    var item = $(this);
    rateForm(item, 4);
  });

  $(document).on('click', '#five-star', function(evt) {
    evt.preventDefault();
    var item = $(this);
    rateForm(item, 5);
  });



  var rateForm = function(item, rating) {
    var recipe_id = item.data('recipeid');
    var serving_size = item.data('servingsize');
    var displayButton = item.data('displaybutton');
    $.ajax({
        url: '/recipe/rate',
        type: 'PUT',
        data: { 
          recipeid: recipe_id,
          rating: rating,
          servingsize: serving_size
        }
      }).done(function(response) {
        $.post('/recipe/' + recipe_id,
          {servingSize: serving_size}
        ).done(function(response) {
          console.log("hello there!!");
          console.log(response.content.recipe.rating);
          var zero = response.content.recipe.rating==0;
          var one = response.content.recipe.rating==1;
          var two = response.content.recipe.rating==2;
          var three = response.content.recipe.rating==3;
          var four = response.content.recipe.rating==4;
          var five = response.content.recipe.rating==5;
          console.log(zero, one, two, three, four, five);
          loadPage('recipeView', { recipe: response.content.recipe, currentUser: currentUser, displayButton: displayButton,
           zero: zero, one: one, two: two, three: three, four: four, five: five});
        }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
          });
      }).fail(function(responseObject) {
        var response = $.parseJSON(responseObject.responseText);
        $('.error').text(response.err);
      });
  }





})();

