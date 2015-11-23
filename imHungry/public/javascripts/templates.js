(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
<<<<<<< HEAD
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"homepage\">\n  <h1>ImHungry</h1>\n  <div id=\"signin\">\n  <h1>Sign in</h1>\n  <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <form id=\"signin-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" required /></div>\n    <input type=\"submit\" />\n  </form>\n</div>\n<p>Or register if you are a new user:</p>\n  <button id=\"register-btn\">Register</button>\n</div>";
=======
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"homepage\">\n  <h1>ImHungry</h1>\n  <p>You must be signed in to continue.</p>\n  <button id=\"signin-btn\">Sign in</button>\n  <button id=\"register-btn\">Register</button>\n</div>";
>>>>>>> c23c72a066cdd5df7ab5b727922c1be18bc96f6d
},"useData":true});
templates['ingredient'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"ingredient\">\n  <label>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ingredient : depth0)) != null ? stack1.name : stack1), depth0))
    + " </label><p>: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ingredient : depth0)) != null ? stack1.amount : stack1), depth0))
    + " </p>\n</div>";
},"useData":true});
templates['recipe'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "      <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n<div class=\"recipe\" data-recipeid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + ">\n  <label>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.name : stack1), depth0))
    + "</label>\n\n  <label>Ingredients: </label>\n  <ul class=\"ingredients\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.ingredients : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n\n  <label>Serving size: </label><p> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingsize : stack1), depth0))
    + "</p>\n\n  <label>Instructions: </label>\n  <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.instructions : stack1), depth0))
    + "</p>\n</div>\n\n\n";
},"useData":true});
templates['register'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"register\">\n  <a href=\"#\" id=\"home-link\">Back to Home</a>\n  <h1>Register</h1>\n  <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <form id=\"register-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" required /></div>\n    <div>Confirm Password: <input type=\"password\" name=\"confirm\" required /></div>\n    <input type=\"submit\" />\n  </form>\n</div>";
},"useData":true});
templates['search'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "              "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              <p>Searched is true</p>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.recipe,depth0,{"name":"recipe","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                <p><em>No recipes found. We suggest that you allow additional ingredients in your search.</em></p>\n";
},"8":function(container,depth0,helpers,partials,data) {
<<<<<<< HEAD
    return "        <li class=\"ingredient\" style=\"list-style-type:none\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
=======
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <li class=\"ingredient\" style=\"list-style-type:none\" data-ingredient-id="
    + alias2(alias1(depth0, depth0))
    + ">"
    + alias2(alias1(depth0, depth0))
>>>>>>> c23c72a066cdd5df7ab5b727922c1be18bc96f6d
    + "<button class=\"delete-button\" type=\"button\">Delete</button></li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <p><em>No ingredients yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<p>Welcome, <b>"
    + container.escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentUser","hash":{},"data":data}) : helper)))
    + "</b> (<a href=\"#\" id=\"logout-link\">logout</a>)</p>\n\n<div class=\"wrapper\">\n    <div class=\"left\">\n        <h1>Find recipes.</h1>\n\n        <form id=\"search-form\">\n          <div>Serving size: <input type=\"number\" name=\"servingsize\"/></div>\n          <div>Additional ingredients: <input type=\"text\" name=\"additional\"/></div>\n          <input type=\"submit\" value=\"Scavenge\"/>\n        </form>\n\n          <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n\n          <div class=\"results\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.searched : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n    </div>\n\n    <div class=\"right\">\n      <h1>Your pantry.</h1>\n\n      <div id=\"ingredientsList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "      </div>\n\n      <form id=\"pantry-form\">\n        <div>Add a new ingredient: <input type=\"text\" id=\"new-ingredient\" name=\"ingredient\" required />\n        <input type=\"submit\" value=\"Add\"/></div>\n      </form>\n  </div>\n";
},"usePartial":true,"useData":true});
<<<<<<< HEAD
=======
templates['signin'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"signin\">\n  <a href=\"#\" id=\"home-link\">Back to Home</a>\n  <h1>Sign in</h1>\n  <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <form id=\"signin-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" required /></div>\n    <input type=\"submit\" />\n  </form>\n</div>";
},"useData":true});
>>>>>>> c23c72a066cdd5df7ab5b727922c1be18bc96f6d
})();