// Wrap in an immediately invoked function expression.
(function() {
  /*
  Once an ingredient has been added, this function is called to add it to the pantry.
  */
  $(document).on('submit', '#pantry-form', function(evt) {
      evt.preventDefault();
      $.post(
          '/pantry/add',
          helpers.getFormData(this)
      ).done(function(response) {
          //currentUser = response.content.user;
      }).fail(function(responseObject) {
          var response = $.parseJSON(responseObject.responseText);
          $('.error').text(response.err);
      });
  });

//   /*
//   Once a user has registered, this function is called to ensure
//   the correct data has been entered, store the data, and subsequently
//   load the home page.
//   */
//   $(document).on('submit', '#register-form', function(evt) {
//       evt.preventDefault();
//       var formData = helpers.getFormData(this);
//       if (formData.password !== formData.confirm) {
//           $('.error').text('Password and confirmation do not match!');
//           return;
//       }
//       delete formData['confirm'];
//       $.post(
//           '/users',
//           formData
//       ).done(function(response) {
//           loadHomePage();
//       }).fail(function(responseObject) {
//           var response = $.parseJSON(responseObject.responseText);
//           $('.error').text(response.err);
//       });
//   });

//   /*
//   When a user logs out, currentUser goes back to being undefined 
//   and the generic home page is reloaded.
//   */
//   $(document).on('click', '#logout-link', function(evt) {
//       evt.preventDefault();
//       $.post(
//           '/users/logout'
//       ).done(function(response) {
//           currentUser = undefined;
//           loadHomePage();
//       }).fail(function(responseObject) {
//           var response = $.parseJSON(responseObject.responseText);
//           $('.error').text(response.err);
//       });
//   });
// })();


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
