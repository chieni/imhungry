// Wrap in an immediately invoked function expression.
(function() {
  /*
  Once an ingredient has been added, this function is called to add it to the pantry.
  */
  $(document).on('submit', '#pantry-form', function(evt) {
      evt.preventDefault();
      var formData = helpers.getFormData(this);
      var ingredient = formData.ingredient;
      $.ajax({
        url: '/pantry/',
        type: 'PUT',
        data: { ingredientName: ingredient}
      }).done(function(response) {
        loadHomePage();
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });

    $('#new-ingredient').val('');
    $('#new-ingredient').focus();
  });

  /*
  Deletes an ingredient from pantry when delete button is clicked
  */
  $(document).on('click', '.delete-button', function(evt) {
    var list = $(this).parent().parent();
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

})();