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
        $('#new-ingredient').val('');
        $('#new-ingredient').focus();
        loadHomePage();
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });

  $(document).on('click', '.delete-button', function(evt) {
    console.log("delete clicked");
    console.log(this.parentNode);
    evt.preventDefault();
    // $.delete(
    //   '/pantry/delete'
    //   ).done(function(response) {
    //     document.getElementById("ingredientsList").removeChild(this.parentNode);
    //   }).fail(function(responseObject) {
    //     var response = $.parseJSON(responseObject.responseText);
    //       $('.error').text(response.err);
    //   })


  // $.ajax({
  //       url: '/pantry/delete',
  //       type: 'DELETE',
  //       data: {
  //         username: username,
  //         ingredient: this.
  //       },
  //       success: function(data) {
  //         if (data.success) {
  //           table.removeChild(element);
  //         }
  //         else {
  //           alert(data.message);
  //         }
  //       },
  //       dataType: "json"
  //     });
  });

})();