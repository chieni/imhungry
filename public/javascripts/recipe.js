// Wrap in an immediately invoked function expression.
(function() {
  /*
    Loads recipe view for recipe when clicked
  */
  $(document).on('click', '.recipe', function(evt) {
      var item = $(this);
      var recipe_id = item.data('recipeid');
      var serving_size = $(".container").attr('data-serving-size');

      if (serving_size) {
      } else {
        serving_size = item.data('recipesize');
      }

      var ingredientsList = $(".container").attr('data-ingredientsList-id');
      $.post('/recipe/' + recipe_id,
        {servingSize: serving_size}
      ).done(function(response) {
        if (ingredientsList) {
          loadPage('recipeView', { recipe: response.content.recipe, servingSize: serving_size, currentUser: currentUser, displayButton: response.content.displayButton, ingredients: ingredientsList });
        } else {
          loadPage('recipeView', { recipe: response.content.recipe, servingSize: serving_size, currentUser: currentUser, displayButton: response.content.displayButton});

        }
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
        loadPage('recipeView', { recipe: response.content.recipe, currentUser: currentUser, displayButton: response.content.displayButton });
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });

  /*
  Scales the ingredient values of the recipe based on the user's input, once they've pressed the Scale button
  */
  $(document).on('submit', '#scale-form', function(evt) {
    evt.preventDefault();
    var item = $(this);
    var recipe_id = item.data('recipeid');
    var formData = helpers.getFormData(this);
    if (formData.servingsize>0) {
      $.post('/recipe/' + recipe_id,
        {servingSize: formData.servingsize}
      ).done(function(response) {
        loadPage('recipeView', { recipe: response.content.recipe, currentUser: currentUser, displayButton: response.content.displayButton });
      }).fail(function(responseObject) {
            var response = $.parseJSON(responseObject.responseText);
            $('.error').text(response.err);
      });
    }
    else {
      $('.sizing-error').text('Serving size must be a positive number');
          return;
    }
    
  });

  /*
  Returns a logged in user to the search page
  */
  $(document).on('click', '.back-to-search', function(evt) {
      evt.preventDefault();
      var formData = helpers.getFormData(this);
      loadSearchResults(formData);
  });

  /*
  Returns an anonymous to the search page
  */
  $(document).on('click', '.back-to-search-anon', function(evt) {
      evt.preventDefault();
      var ingredients = $(".container").attr('data-ingredientsList-id');
      var size = $(".container").attr('data-servingSize');
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

  });

  /*
  Returns a logged in user to their cookbook
  */
  $(document).on('click', '.back-to-cookbook', function(evt) {
      evt.preventDefault();
      loadCookbookPage();
  });

  /*
  Actions based upon which star of the ratings stars the user is clicking. Submits a user rating for
  the recipe based upon the star number.
  */
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



  /*
  Helper method that makes an AJAX call to the routes responsible for recipe ratings.
  */
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
          loadPage('recipeView', { recipe: response.content.recipe, currentUser: currentUser, displayButton: displayButton});
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

