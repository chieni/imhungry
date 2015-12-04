// Wrap in an immediately invoked function expression.
(function() {
  /*
  Once an ingredient has been added, this function is called to add it to the pantry.
  */
  $(document).on('submit', '#pantry-form', function(evt) {
      evt.preventDefault();
      var formData = helpers.getFormData(this);
      var ingredient = formData.ingredient;
      var amount = formData.ingredientAmt;
      $.ajax({
        url: '/pantry/',
        type: 'PUT',
        data: { 
          ingredientName: ingredient,
          ingredientAmt: amount
        }
      }).done(function(response) {
        loadHomePage();
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          alert(response.err);
      });

    $('#new-ingredient').val('');
    $('#new-ingredient').focus();
  });

  /*
  Deletes an ingredient from pantry when delete button is clicked
  */
  $(document).on('click', '.delete-button', function(evt) {
    var element = $(this).parent();
      $.ajax({
        url: '/pantry/',
        type: 'DELETE',
        data: {
          ingredientId: element.find(".ingredient").attr('data-ingredient-id')
        },
        success: function(data) {
          if (data.success) {
            element.remove();
          }
          else {
            alert(data.message);
          }
        },
        dataType: "json"
      });

  });

  $(document).on('click', '.ingredient-amt', function(evt) {
    $(this).hide();
    $(this).parent().find('.parenthesis').hide();
    var amount = $(this).text();
    $(this).parent().find('.edit-amt').val(amount);
    $(this).parent().find('.edit-amt').show().focus();
  });

  $(document).on('keypress', '.edit-amt', function(evt) {
        if(evt.which == 13){
          $(this).blur();    
      }
  });

  $(document).on('focusout', '.edit-amt', function(evt) {
    $(this).hide();
    $(this).parent().find('.parenthesis').show();
    $(this).parent().find('.ingredient-amt').show();
    var formData = helpers.getFormData(this);
    var amount = formData.editedIngAmt;
    var ingId = $(this).parent().find(".ingredient").attr('data-ingredient-id');

    $.ajax({
        url: '/pantry/amount',
        type: 'PUT',
        data: {
          ingredientId: ingId,
          ingredientAmt: amount
        },
        success: function(data) {
          if (!data.success) {          
            alert(data.message);
          }
        },
        dataType: "json"
      });   
      $(this).parent().find('.ingredient-amt').text(amount);
  });

  $(document).on('click', '.anon-delete-button', function(evt) {
    var element = $(this).parent();
    element.remove();
  });

  $(document).on('submit', '#anon-pantry-form', function(evt) {
      evt.preventDefault();
      var element = $(this).parent();

      var ingredientsList = $(".container").attr('data-ingredientsList-id').split(',');

      var formData = helpers.getFormData(this);
      var ingredient = formData.ingredient;

      ingredientsList.push(ingredient);

    $('#new-ingredient').val('');
    $('#new-ingredient').focus();

    loadPage('searchAnon', {currentUser: null, ingredients: ingredientsList});
  });

})();