// Wrap in an immediately invoked function expression.
(function() {
  /*
    Submits sign-in information on click and logs in user (if info is valid)
  */
  $(document).on('submit', '#search-form', function(evt) {
      console.log("clicked scavenge");
      evt.preventDefault();
      $.get(
          '/search',
          helpers.getFormData(this)
      ).done(function(response) {
        loadSearchResults();
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });
})();