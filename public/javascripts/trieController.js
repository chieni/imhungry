var CONTROLLER = (function(document) {

  // Function to be called on every keyup event
  var autocompleteListener;

  /**
   * Registers a listener function to be called after each keypress. 
   * The listener will be passed a single String word as an argument
   * when invoked.
   *
   * @param {Function} listener - The function to be called. Function
   *   must accept a single String as an argument.
   */
  function registerAutocompleteListener(listener) {
    autocompleteListener = listener;
  }

  /**
   * Appends a String value to the end of the search results list.
   *
   * @param {String} value - The text to append to the search list.
   */
  function appendToSearchResults(value) {
    $('#results-list').append(createListElement(value, onResultClick));
  }

  /**
   * Removes all entries existing in the search results.
   */
  function clearSearchResults() {
    $('#results-list').html('');
  }

  /**
   * Create an <li> that contains the given value and executes the given
   * handler when it is clicked.
   *
   * @param {String} value - The text to place inside the <li>.
   * @param {Function} onClick - The event handler to execute when the <li> is
   *  clicked.
   */
  function createListElement(value, onClick) {
    var li = document.createElement('li');
    li.className = 'ing-result';
    li.innerHTML = value;
    li.addEventListener('click', onClick, false);
    return li;
  }

  /**
   * Handle the click of an autocompletion.
   *
   * @param {Object} event - The click event.
   */
  function onResultClick(event) {
    $('#new-ingredient').val(event.target.innerHTML);
    $("#add-ing-btn").removeAttr('disabled');
    clearSearchResults();
  }

  /**
   * Perform autocompletion each time a key is typed.
   */
  function onKeyUp() {
    clearSearchResults();
    // If there's a search term and a registered listener,
    // invoke the listener with the search term.
    var searchTerm = $('#new-ingredient').val();
    if (searchTerm.length > 0 && autocompleteListener != undefined) {
      autocompleteListener(searchTerm);
    }
  }

  $(document).on('keyup', '#new-ingredient', onKeyUp);

  /** Public exports for CONTROLLER module **/
  return {
    "registerAutocompleteListener" : registerAutocompleteListener,
    "clearSearchResults" : clearSearchResults,
    "appendToSearchResults" : appendToSearchResults
  };

})(document);