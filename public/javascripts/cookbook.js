
// Wrap in an immediately invoked function expression.
(function() {
  /*
  Once a recipe has been added, this function is called to add it to the cookbook.
  */
  $(document).on('click', '#save-btn', function(evt) {
    var recipeId = $(this).data('id');
    var servingsize = $(this).data('servingsize');
      evt.preventDefault();
      $.post(
          '/cookbook/' +recipeId
      ).done(function(response) {
        $.post('/recipe/' + recipeId,
        {servingSize: servingsize}
        ).done(function(response) {
          loadPage('recipeView', { recipe: response.content.recipe, currentUser: currentUser, displayButton: response.content.displayButton });
          }).fail(function(responseObject) {
              var response = $.parseJSON(responseObject.responseText);
              $('.error').text(response.err);
          })
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
  $(document).on('click', '#recipe-delete-btn', function(evt) {
    var id = this.getAttribute('data-id');
    evt.preventDefault();
    var list = this.parentNode.parentNode;
    var element = this.parentNode;
    $.ajax({
        url: '/cookbook/',
        type: 'DELETE',
        data: {
          recipeId: id
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