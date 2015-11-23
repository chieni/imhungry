// Wrap in an immediately invoked function expression.
(function() {
  /*
  Once an ingredient has been added, this function is called to add it to the pantry.
  */
  $(document).on('submit', '#pantry-form', function(evt) {
    console.log("add clicked");
      evt.preventDefault();
      $.post(
          '/pantry/add',
          helpers.getFormData(this)
      ).done(function(response) {
        loadHomePage();
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
    $('#new-ingredient').val('');
    $('#new-ingredient').focus();
  });

  $(document).on('click', '.delete-button', function(evt) {
    console.log("delete clicked");
    console.log($(this));
    console.log(this.parentNode);
    console.log($(this).parent());
    console.log(this.parentNode.getAttribute('data-ingredient-id'));
    evt.preventDefault();


  var list = this.parentNode.parentNode;
  var element = this.parentNode;
  $.ajax({
        url: '/pantry/delete',
        type: 'DELETE',
        data: {
          ingredient: this.parentNode.getAttribute('data-ingredient-id')
        },
        success: function(data) {
          if (data.success) {
            list.removeChild(element);
          }
          else {
            alert(data.message);
          }
        },
        dataType: "json"
      });
  });

})();