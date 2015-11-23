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
        console.log(response.content.pantry);
        console.log("done");
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });

  // $('#pantry-form').submit(function (evt) {
  //   evt.preventDefault();
  //  console.log("clicked pantry form");
  //  return false;
  // });

})();