// Wrap in an immediately invoked function expression.
(function() {
  /*
  Once an ingredient has been added, this function is called to add it and an optional amount to the pantry.
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

  /*
  When the ingredient amount is clicked, this brings up the edit text box to allow the user to edit the amount
  */
  $(document).on('click', '.ingredient-amt', function(evt) {
    $(this).hide();
    //$(this).parent().find('.parenthesis').hide();
    var text = $(this).text();
    var amount = text.substring(2,text.length-2);
    console.log(amount);
    $(this).parent().find('.edit-amt').val(amount);
    $(this).parent().find('.edit-amt').show().focus();
  });

  /*
  This triggers the focusout even when the user presses enter in the edit amount text box
  */
  $(document).on('keypress', '.edit-amt', function(evt) {
    if(evt.which == 13){
      $(this).blur();    
    }
  });

  /*
  When users focus out of the edit amount text box, it will update the ingredient amount
  */
  $(document).on('focusout', '.edit-amt', function(evt) {
    $(this).hide();
    //$(this).parent().find('.parenthesis').show();
    $(this).parent().find('.ingredient-amt').show();
    var formData = helpers.getFormData(this);
    var amount = formData.editedIngAmt;
    console.log(amount);
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
    console.log(amount);
    $(this).parent().find('.ingredient-amt').text("( "+amount+" )");
  });

  /*
  Fires the event to delete ingredients from the pantry on the "hook" page
  */
  $(document).on('click', '.anon-delete-button', function(evt) {
    var element = $(this).parent();
    var ing = element.find('.ingredient').text();
    var ingredientsList = $(".container").attr('data-ingredientsList-id').split(',');
    
    var index = ingredientsList.indexOf(ing);
    console.log(index)
    if (index > -1){
      ingredientsList.splice(index, 1);
    }
    console.log(ingredientsList);
    loadPage('searchAnon', {currentUser: null, ingredients: ingredientsList});

  });

/*
Fires the event to add ingredients on the hook page
*/
$(document).on('submit', '#anon-pantry-form', function(evt) {
  evt.preventDefault();
  var element = $(this).parent();

  var ingredientsList = $(".container").attr('data-ingredientsList-id').split(',');

  var formData = helpers.getFormData(this);
  var ingredient = formData.ingredient;

  var index = ingredientsList.indexOf(ingredient);
  if (index < 0){
    ingredientsList.push(ingredient);
  }

  $('#new-ingredient').val('');
  $('#new-ingredient').focus();

  loadPage('searchAnon', {currentUser: null, ingredients: ingredientsList});
});
})();