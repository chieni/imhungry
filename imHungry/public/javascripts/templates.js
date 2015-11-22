(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"homepage\">\n  <h1>ImHungry</h1>\n  <p>You must be signed in to continue.</p>\n  <button id=\"signin-btn\">Sign in</button>\n  <button id=\"register-btn\">Register</button>\n</div>";
},"useData":true});
templates['recipe'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  	<label>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tweet : depth0)) != null ? stack1.retweeter : stack1), depth0))
    + " </label><p> retweeted </p><label> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tweet : depth0)) != null ? stack1.author : stack1), depth0))
    + "</label><p> : "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tweet : depth0)) != null ? stack1.content : stack1), depth0))
    + "</p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  	<label>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tweet : depth0)) != null ? stack1.author : stack1), depth0))
    + " </label><p> tweeted: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.tweet : depth0)) != null ? stack1.content : stack1), depth0))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "  	<a href=\"#\" class=\"delete-tweet\">Delete</a>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.isNotRetweeter : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "  		<a href=\"#\" class=\"retweet-tweet\">Retweet</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=depth0 != null ? depth0 : {};

  return "\n<div class=\"recipe\" data-recipename="
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + ">\n  <label>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "</label>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isRetweet : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.isAuthor : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n\n\n";
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
    var stack1;

  return ((stack1 = container.invokePartial(partials.ingredient,depth0,{"name":"ingredient","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "        <p><em>No ingredients yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!-- <div id=\"main\">\n\n  <form id=\"search-form\">\n    <div>Serving <input type=\"text\" name=\"username\" required /></div>\n  </form>\n\n\n\n  </div>\n</div> -->\n\n<div class=\"wrapper\">\n    <div class=\"left\">\n        <h1>Find recipes.</h1>\n        <div class=\"search\">\n          <div><label>Serving size</label> <input type=\"text\" name=\"servingsize\"/></div>\n          <div><label>Additional ingredients</label> <input type=\"text\" name=\"addIngredients\"/></div>\n          <div><button id=\"submit-new-ingredient\">Scavenge</button></div>\n        </div>\n    </div>\n    <div class=\"right\">\n      <h1>Your Pantry.</h1>\n      <div class=\"pantry\">\n\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.ingredient : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n      <div>\n        <label for=\"new-ingredient-input\">Add a new ingredient:</label>\n        <input type=\"text\" id=\"new-ingredient-input\" />\n        <button id=\"submit-new-ingredient\">Add</button>\n      </div>\n    </div>\n  </div>";
},"usePartial":true,"useData":true});
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
})();