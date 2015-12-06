// Wrap in an immediately invoked function expression.
(function() {
  /*
  Once a user has signed in, this function is called to load the 
  correct form after.
  */
  $(document).on('submit', '#signin-form', function(evt) {
      evt.preventDefault();
      $.post(
          '/users/login',
          helpers.getFormData(this)
      ).done(function(response) {
          currentUser = response.content.user;
          loadHomePage();
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });

  /*
  Once a user has registered, this function is called to ensure
  the correct data has been entered, store the data, and subsequently
  load the signin page.
  */
  $(document).on('submit', '#register-form', function(evt) {
      evt.preventDefault();
      var formData = helpers.getFormData(this);
      if (formData.password !== formData.confirm) {
          $('.error').text('Password and confirmation do not match!');
          return;
      }
      delete formData['confirm'];
      $.post(
          '/users',
          formData
      ).done(function(response) {
          loadPage('index');
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });

  /*
  Once a user has registered from entering via the hook, this function is called to ensure
  the correct data has been entered, store the data, and subsequently
  load the signin page.
  */
  $(document).on('submit', '#anon-register-form', function(evt) {
      evt.preventDefault();

      var formData = helpers.getFormData(this);
      if (formData.password !== formData.confirm) {
          $('.error').text('Password and confirmation do not match!');
          return;
      }
      delete formData['confirm'];
      formData['ingredients'] = $(".container").attr('data-ingredientsList-id');

      $.post(
          '/users/anon',
          formData
      ).done(function(response) {
        $("#signup-modal").modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();

        $('body').css({'background': 'linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("../imgs/yummy-dinner-party.jpg") no-repeat center center fixed'});
        $('body').css('background-size', 'cover');
          loadPage('index');
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });
  /*
  When a user logs out, currentUser goes back to being undefined 
  and the generic home page is reloaded.
  */
  $(document).on('click', '#logout-link', function(evt) {
      evt.preventDefault();
      $.post(
          '/users/logout'
      ).done(function(response) {
          currentUser = undefined;
          loadHomePage();
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });
})();


// Packaged helper methods.
//
// Here, just one which takes the content of an HTML 
// form (passed in as an argument) and converts the 
// data to a set of key-value pairs for use in AJAX 
// calls.
var helpers = (function() {

  var _helpers = {};

  _helpers.getFormData = function(form) {
    var inputs = {};
    $(form).serializeArray().forEach(function(item) {
      inputs[item.name] = item.value;
    });
    return inputs;
  };
  Object.freeze(_helpers);
  return _helpers;

})();
