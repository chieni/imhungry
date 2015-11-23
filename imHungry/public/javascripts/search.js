// Wrap in an immediately invoked function expression.
(function() {
  /*
    Submits the search query when a user clicks on "Scavenge" given the items in his/her pantry.
    This returns all recipes in our database the user can create given his/her pantry.
  */
  $(document).on('submit', '#search-form', function(evt) {
      evt.preventDefault();
      loadSearchResults();
  });
})();