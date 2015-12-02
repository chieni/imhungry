
// Wrap in an immediately invoked function expression.
(function() {
  /*
  Once a recipe has been added, this function is called to add it to the cookbook.
  */
  $(document).on('click', '#save-btn', function(evt) {
    var recipeId = $(this).data('id');
      evt.preventDefault();
      $.post(
          '/cookbook/' +recipeId
      ).done(function(response) {
        console.log(response);
        loadPage('recipeView', { recipe: response.content.recipe, currentUser: currentUser, displayButton: response.content.displayButton });
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
    $('#new-recipe').val('');
    $('#new-recipe').focus();
  });

  /*
  Deletes a recipe from cookbook when delete button is clicked
  */
  $(document).on('click', '#recipe-delete-button', function(evt) {
    evt.preventDefault();
    var list = this.parentNode.parentNode;
    var element = this.parentNode;
    $.ajax({
        url: '/cookbook/delete',
        type: 'DELETE',
        data: {
          recipeId: this.parentNode.getAttribute('data-recipeid')
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