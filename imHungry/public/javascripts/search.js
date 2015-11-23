// Wrap in an immediately invoked function expression.
(function() {
  /*
    Submits sign-in information on click and logs in user (if info is valid)
  */
  $(document).on('submit', '#search-form', function(evt) {
      evt.preventDefault();
      $.post(
          '/search',
          helpers.getFormData(this)
      ).done(function(response) {
        loadSearchPage();
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });
})();