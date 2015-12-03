
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['anonHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"\" id=\"register-btn\">SIGN UP</a></li>\n           <li class=\"active\"><a href=\"\" id=\"signin-btn\" >LOGIN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  ";
},"useData":true});
templates['cookbook'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.cookbookRecipe,depth0,{"name":"cookbookRecipe","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "                <p><em>Your cookbook is currently empty. Save recipes to stash them here!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"cookbook\">\n	<div class=\"col-md-5 left\">\n		<h1>Cookbook</h1>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "          </div>\n    </div>";
},"usePartial":true,"useData":true});
templates['cookbookRecipeView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"cookbookItem\" data-recipid="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n<div class=\"cookbookRecipe\" data-recipeid="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n  <p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n  <img src = "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.imageURLs : depth0)) != null ? stack1["1"] : stack1), depth0))
    + ">\n  \n  \n  \n</div>\n<button id=\"recipe-delete-btn\" data-id="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + " class=\"btn btn-lg btn-warning recipe-delete-btn\" type=\"button\">Delete</button>\n</div>";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"\">PANTRY</a></li>\n          <li class=\"active\"><a href=\"\" id=\"cookbook-btn\">COOKBOOK</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  ";
},"useData":true});
templates['hook'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.anonHeader,depth0,{"name":"anonHeader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n\n<div class =\"container-fluid\">\n<div class=\"row\">  \n  <div class=\"hook-box\">\n  \n    <div class=\"hook-text-line\">\n    <span class=\"hook-text\">I am cooking for </span> \n    <input id=\"hook-number-input\" type=\"number\" value=\"1\"/> \n    <span class=\"hook-text\"> and I have </span>\n    <span class=\"hook-vert-line\"> | </span>\n    <input id=\"hook-ingr-input\" type=\"text\" placeholder=\"corn, pork shoulder, cilantro, etc.\"/>\n\n    </div>\n      <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n    <form id=\"hook-search-form\">\n        <input type=\"submit\" value=\"SCAVENGE\" class=\"btn btn-warning\"/>\n    </form>\n  </div>\n</div>\n</div>";
},"usePartial":true,"useData":true});
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"\" id=\"register-btn\">SIGN UP</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  \n\n\n<div class =\"container-fluid\">\n<div class=\"row\">  \n  <div class=\"col-md-4 col-md-offset-4 signin-box\" >\n    <h2 class=\"text-center\">Sign in</h2>\n      <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n\n      <form id=\"signin-form\">\n      <div>\n        <label for=\"inputUsername\" class=\"sr-only\"><span>Username</span></label>\n        <input type=\"username\" id=\"inputUsername\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus/>\n      </div>\n      <div>\n        <label for=\"inputPassword\" class=\"sr-only\"><span>Password</span></label>\n        <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required/>\n      </div>\n        <input type=\"submit\" class=\"btn btn-lg btn-warning btn-block\"/>\n      </form>\n</div>\n</div>\n</div>\n";
},"useData":true});
templates['ingredient'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"ingredient\">\n  <label>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ingredient : depth0)) != null ? stack1.name : stack1), depth0))
    + " </label><p>: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ingredient : depth0)) != null ? stack1.amount : stack1), depth0))
    + " </p>\n</div>";
},"useData":true});
templates['recipe'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"recipe recipe-overlay\" data-recipeid="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + " data-recipesize="
    + alias4(((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size","hash":{},"data":data}) : helper)))
    + ">\n  <p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n  <img class=\"recipe-image\" src = "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.imageURLs : depth0)) != null ? stack1["1"] : stack1), depth0))
    + ">\n</div>\n\n\n";
},"useData":true});
templates['recipeView'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.anonHeader,depth0,{"name":"anonHeader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"ingredient\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "      <button id=\"save-btn\" data-id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + " data-servingsize="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + " class=\"btn btn-lg btn-warning save-btn\">Save Recipe to Cookbook</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.currentUser : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<div data-recipeid="
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))

    + ">\n\n<div class=\"container-fluid\">\n\n<div class=\"row\">\n  <div class=\"col-md-5 recipe-box\">\n    <div class=\"recipe-view-img\" style=\"background-image: url("

    + ">\n\n<div class=\"container\">\n\n<div class=\"row\">\n  <div class=\"col-md-5 recipe-box-left\">\n    <div class=\"recipe-view-img\" style=\"background-image: url("

    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.imageURLs : stack1)) != null ? stack1["0"] : stack1), depth0))
    + ")\"></div>\n    <div class=\"serving-label\">Serving size: "
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + "</div>\n    <div class=\"recipe-name\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.name : stack1), depth0))

    + "</div>\n  </div>\n\n  <div class=\"col-md-6 col-md-offset-1 recipe-box\">\n    <div class=\"ingredients\">\n      <div class=\"ingredients-header\"><font size=\"40\">Ingredients: </font></div>\n      \n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.ingredients : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"instructions\">\n      <div class=\"instructions-label\"><font size=\"20\">Instructions: </font></div>\n      <a class=\"recipe-url\" href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.sourceURL : stack1), depth0))
    + "\"><font size=\"20\">Full instructions here</a>\n    </div>\n"

    + "</div>\n  </div>\n\n  <div class=\"col-md-6 col-md-offset-1 recipe-box-right\">\n    <div class=\"ingredients\">\n      <div class=\"ingredients-header\"><font size=\"40\">Ingredients: </font></div>\n      \n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.ingredients : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"instructions\">\n      <div class=\"instructions-label\"><font size=\"20\">Instructions: </font></div>\n      <a class=\"recipe-url\" href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.sourceURL : stack1), depth0))
    + "\">Full instructions here</a>\n    </div>\n"

    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayButton : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n  </div>\n</div>\n\n</div>\n</div>";
},"usePartial":true,"useData":true});
templates['register'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"\" id=\"signin-btn\" >LOGIN</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n\n\n\n<div class =\"container-fluid\">\n<div class=\"row\">  \n  <div class=\"col-md-4 col-md-offset-4 signin-box\" >\n  \n\n  <h2 class=\"text-center\">Register</h2>\n  <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n<!--   <form id=\"register-form\">\n    <div>Username: <input type=\"text\" name=\"username\" required /></div>\n    <div>Password: <input type=\"password\" name=\"password\" required /></div>\n    <div>Confirm Password: <input type=\"password\" name=\"confirm\" required /></div>\n    <input type=\"submit\" />\n  </form> -->\n\n\n  <form id=\"register-form\">\n  <div>\n    <label for=\"inputUsername\" class=\"sr-only\"><span>Username</span></label>\n    <input type=\"username\" id=\"inputUsername\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus/>\n  </div>\n  <div>\n    <label for=\"inputPassword\" class=\"sr-only\"><span>Password</span></label>\n    <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required/>\n  </div>\n  <div>\n    <label for=\"inputPasswordConfirm\" class=\"sr-only\"><span>Confirm Password</span></label>\n    <input type=\"password\" id=\"inputPasswordConfirm\" name=\"confirm\" class=\"form-control\" placeholder=\"Confirm Password\" required/>\n  </div>\n    <input type=\"submit\" class=\"btn btn-lg btn-warning btn-block\"/>\n  </form>\n</div>\n</div>\n</div>";
},"useData":true});
templates['search'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.recipe,depth0,{"name":"recipe","hash":{"size":(depths[1] != null ? depths[1].size : depths[1])},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "      <p><em>No recipes found.</em></p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "      <div class=\"ingredients-line\">\n        <span class=\"delete-button\" style=\"color:orange;\">x</span><span class=\"ingredient\" data-ingredient-id="
    + alias2(alias1((depth0 != null ? depth0._id : depth0), depth0))
    + ">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\n      </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "      <p><em>No ingredients yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"welcome\">Welcome, <b>"
    + container.escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentUser","hash":{},"data":data}) : helper)))

    + "</b> (<a href=\"#\" id=\"logout-link\">logout</a>)</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-5 left\">\n\n      <h1>Find recipes.</h1>\n\n      <form id=\"search-form\" class=\"form-inline\">\n       <div>Serving size: <input class=\"form-control\" id=\"serv-size-input\" type=\"number\" name=\"servingsize\"/>\n       <input type=\"submit\" value=\"Scavenge\" class=\"btn btn-warning\"/></div>\n     </form>\n\n     <div class=\"error\">\n"

    + "</b> (<a href=\"#\" id=\"logout-link\">logout</a>)</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-5 left\">\n\n      <h1>Find recipes.</h1>\n\n      <form id=\"search-form\" class=\"form-inline\">\n       <div><input class=\"form-control\" id=\"serv-size-input\" type=\"number\" name=\"servingsize\" placeholder=\"Serving size\">\n       <input type=\"submit\" value=\"Scavenge\" class=\"btn btn-warning\"/></div>\n     </form>\n\n     <div class=\"error\">\n"

    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"results\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.searched : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n\n  <div class=\"col-md-5 col-md-offset-1 right\">\n    <h1>Your pantry.</h1>\n    <div id=\"ingredientsList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <form id=\"pantry-form\" class=\"form-inline\">\n      <div><input class=\"form-control\" id=\"new-ingredient\" name=\"ingredient\" type=\"text\" autocomplete=\"off\" placeholder=\"Add a new ingredient\" required /><input type=\"submit\" value=\"Add\" class=\"btn btn-warning\" id=\"add-ing-btn\"/></div>\n           <div><ul id=\"results-list\" style=\"list-style-type:none\"></ul></div>\n      </form>\n    </div>\n  </div>\n";
},"usePartial":true,"useData":true,"useDepths":true});
templates['searchAnon'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "              "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.recipe,depth0,{"name":"recipe","hash":{"size":(depths[1] != null ? depths[1].size : depths[1])},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                <p><em>No recipes found.</em></p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "\n          <div class=\"ingredients-line\">\n          <span class=\"anon-delete-button\" style=\"color:orange;\">x</span><span class=\"ingredient\" data-ingredient-id="
    + alias2(alias1(depth0, depth0))
    + ">"
    + alias2(alias1(depth0, depth0))
    + "</span>\n\n         </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "          <p><em>No ingredients yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.anonHeader,depth0,{"name":"anonHeader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"container\" data-ingredientsList-id=\""
    + alias4(((helper = (helper = helpers.ingredients || (depth0 != null ? depth0.ingredients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data}) : helper)))
    + "\" data-recipesList-id=\""
    + alias4(((helper = (helper = helpers.recipes || (depth0 != null ? depth0.recipes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipes","hash":{},"data":data}) : helper)))

    + "\">\n<div class=\"row\">\n    <div class=\"col-md-5 left\">\n        <h1>Find recipes.</h1>\n        \n        <form id=\"anon-search-form\" class=\"form-inline\">\n           <div>Serving size: <input type=\"number\" name=\"servingsize\" class=\"form-control\"/>\n          <input type=\"submit\" value=\"Scavenge\" class=\"btn btn-warning\"/></div>\n\n        </form>\n\n          <div class=\"error\">\n"

    + "\">\n<div class=\"row\">\n    <div class=\"col-md-5 left\">\n        <h1>Find recipes.</h1>\n\n        <form id=\"anon-search-form\" class=\"form-inline\">\n           <div><input type=\"number\" name=\"servingsize\" class=\"form-control\" placeholder=\"Serving size\"/>\n          <input type=\"submit\" value=\"Scavenge\" class=\"btn btn-warning\"/></div>\n\n        </form>\n\n          <div class=\"error\">\n"

    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n\n          <div class=\"results\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.searched : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n    </div>\n\n    <div class=\"col-md-5 col-md-offset-1 right\">\n      <h1>Your pantry.</h1>\n\n      <div id=\"ingredientsList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "      </div>\n\n      <form id=\"anon-pantry-form\" class=\"form-inline\">\n        <div><input class=\"form-control\" id=\"new-ingredient\" name=\"ingredient\" autocomplete=\"off\" placeholder=\"Add a new ingredient\" required />\n        <input type=\"submit\" value=\"Add\" class=\"btn btn-warning\"/></div>\n        <div><ul id=\"results-list\" style=\"list-style-type:none\"></ul></div>\n      </form>\n  </div>\n  </div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

})();

!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.anonHeader=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="" id="register-btn">SIGN UP</a></li>\n           <li class="active"><a href="" id="signin-btn" >LOGIN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  '},useData:!0}),a.cookbook=n({1:function(n,a,e,r,l){var s;return null!=(s=n.invokePartial(r.cookbookRecipe,a,{name:"cookbookRecipe",data:l,indent:"                ",helpers:e,partials:r,decorators:n.decorators}))?s:""},3:function(n,a,e,r,l){return"                <p><em>Your cookbook is currently empty. Save recipes to stash them here!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){var s;return(null!=(s=n.invokePartial(r.header,a,{name:"header",data:l,helpers:e,partials:r,decorators:n.decorators}))?s:"")+'<div class="cookbook">\n	<div class="col-md-5 left">\n		<h1>Cookbook</h1>\n'+(null!=(s=e.each.call(null!=a?a:{},null!=a?a.recipes:a,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.program(3,l,0),data:l}))?s:"")+"          </div>\n    </div>"},usePartial:!0,useData:!0}),a.cookbookRecipeView=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){var s,i,t=null!=a?a:{},o=e.helperMissing,d="function",c=n.escapeExpression;return'<div class = "cookbookItem" data-recipid='+c((i=null!=(i=e._id||(null!=a?a._id:a))?i:o,typeof i===d?i.call(t,{name:"_id",hash:{},data:l}):i))+'>\n<div class="cookbookRecipe" data-recipeid='+c((i=null!=(i=e._id||(null!=a?a._id:a))?i:o,typeof i===d?i.call(t,{name:"_id",hash:{},data:l}):i))+">\n  <p>"+c((i=null!=(i=e.name||(null!=a?a.name:a))?i:o,typeof i===d?i.call(t,{name:"name",hash:{},data:l}):i))+"</p>\n  <img src = "+c(n.lambda(null!=(s=null!=a?a.imageURLs:a)?s[1]:s,a))+'>\n  \n  \n  \n</div>\n<button id="recipe-delete-btn" data-id='+c((i=null!=(i=e._id||(null!=a?a._id:a))?i:o,typeof i===d?i.call(t,{name:"_id",hash:{},data:l}):i))+' class="btn btn-lg btn-warning recipe-delete-btn" type="button">Delete</button>\n</div>'},useData:!0}),a.header=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="">PANTRY</a></li>\n          <li class="active"><a href="" id="cookbook-btn">COOKBOOK</a></li>\n<!-- \n          <li><img id="mazzetti" class="navpic" src="img/domm.jpg" alt="Bro Science"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  '},useData:!0}),a.hook=n({1:function(n,a,e,r,l){var s;return"          "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:l}):s))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){var s;return(null!=(s=n.invokePartial(r.anonHeader,a,{name:"anonHeader",data:l,helpers:e,partials:r,decorators:n.decorators}))?s:"")+'\n\n<div class ="container-fluid">\n<div class="row">  \n  <div class="hook-box">\n  \n    <div class="hook-text-line">\n    <span class="hook-text">I am cooking for </span> \n    <input id="hook-number-input" type="number" value="1"/> \n    <span class="hook-text"> and I have </span>\n    <span class="hook-vert-line"> | </span>\n    <input id="hook-ingr-input" type="text" placeholder="corn, pork shoulder, cilantro, etc."/>\n\n    </div>\n      <div class="error">\n'+(null!=(s=e["if"].call(null!=a?a:{},null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?s:"")+'      </div>\n    <form id="hook-search-form">\n        <input type="submit" value="SCAVENGE" class="btn btn-warning"/>\n    </form>\n  </div>\n</div>\n</div>'},usePartial:!0,useData:!0}),a.index=n({1:function(n,a,e,r,l){var s;return"          "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:l}):s))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){var s;return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="" id="register-btn">SIGN UP</a></li>\n<!-- \n          <li><img id="mazzetti" class="navpic" src="img/domm.jpg" alt="Bro Science"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  \n\n\n<div class ="container-fluid">\n<div class="row">  \n  <div class="col-md-4 col-md-offset-4 signin-box" >\n    <h2 class="text-center">Sign in</h2>\n      <div class="error">\n'+(null!=(s=e["if"].call(null!=a?a:{},null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?s:"")+'      </div>\n\n      <form id="signin-form">\n      <div>\n        <label for="inputUsername" class="sr-only"><span>Username</span></label>\n        <input type="username" id="inputUsername" name="username" class="form-control" placeholder="Username" required autofocus/>\n      </div>\n      <div>\n        <label for="inputPassword" class="sr-only"><span>Password</span></label>\n        <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required/>\n      </div>\n        <input type="submit" class="btn btn-lg btn-warning btn-block"/>\n      </form>\n</div>\n</div>\n</div>\n'},useData:!0}),a.ingredient=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){var s,i=n.lambda,t=n.escapeExpression;return'<div class="ingredient">\n  <label>'+t(i(null!=(s=null!=a?a.ingredient:a)?s.name:s,a))+" </label><p>: "+t(i(null!=(s=null!=a?a.ingredient:a)?s.amount:s,a))+" </p>\n</div>"},useData:!0}),a.recipe=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){var s,i,t=null!=a?a:{},o=e.helperMissing,d="function",c=n.escapeExpression;return'<div class="recipe recipe-overlay" data-recipeid='+c((i=null!=(i=e._id||(null!=a?a._id:a))?i:o,typeof i===d?i.call(t,{name:"_id",hash:{},data:l}):i))+" data-recipesize="+c((i=null!=(i=e.size||(null!=a?a.size:a))?i:o,typeof i===d?i.call(t,{name:"size",hash:{},data:l}):i))+">\n  <p>"+c((i=null!=(i=e.name||(null!=a?a.name:a))?i:o,typeof i===d?i.call(t,{name:"name",hash:{},data:l}):i))+'</p>\n  <img class="recipe-image" src = '+c(n.lambda(null!=(s=null!=a?a.imageURLs:a)?s[1]:s,a))+">\n</div>\n\n\n"},useData:!0}),a.recipeView=n({1:function(n,a,e,r,l){var s;return null!=(s=n.invokePartial(r.header,a,{name:"header",data:l,helpers:e,partials:r,decorators:n.decorators}))?s:""},3:function(n,a,e,r,l){var s;return null!=(s=n.invokePartial(r.anonHeader,a,{name:"anonHeader",data:l,helpers:e,partials:r,decorators:n.decorators}))?s:""},5:function(n,a,e,r,l){return'        <div class="ingredient">'+n.escapeExpression(n.lambda(a,a))+"</div>\n"},7:function(n,a,e,r,l){var s,i=n.lambda,t=n.escapeExpression;return'      <button id="save-btn" data-id='+t(i(null!=(s=null!=a?a.recipe:a)?s._id:s,a))+" data-servingsize="+t(i(null!=(s=null!=a?a.recipe:a)?s.servingSize:s,a))+' class="btn btn-lg btn-warning save-btn">Save Recipe to Cookbook</button>\n'},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){var s,i=null!=a?a:{},t=n.lambda,o=n.escapeExpression;return(null!=(s=e["if"].call(i,null!=a?a.currentUser:a,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.program(3,l,0),data:l}))?s:"")+"<div data-recipeid="+o(t(null!=(s=null!=a?a.recipe:a)?s._id:s,a))+'>\n\n<div class="container">\n\n<div class="row">\n  <div class="col-md-5 recipe-box-left">\n    <div class="recipe-view-img" style="background-image: url('+o(t(null!=(s=null!=(s=null!=a?a.recipe:a)?s.imageURLs:s)?s[0]:s,a))+')"></div>\n    <div class="serving-label">Serving size: '+o(t(null!=(s=null!=a?a.recipe:a)?s.servingSize:s,a))+'</div>\n    <div class="recipe-name">'+o(t(null!=(s=null!=a?a.recipe:a)?s.name:s,a))+'</div>\n  </div>\n\n  <div class="col-md-6 col-md-offset-1 recipe-box-right">\n    <div class="ingredients">\n      <div class="ingredients-header"><font size="40">Ingredients: </font></div>\n      \n'+(null!=(s=e.each.call(i,null!=(s=null!=a?a.recipe:a)?s.ingredients:s,{name:"each",hash:{},fn:n.program(5,l,0),inverse:n.noop,data:l}))?s:"")+'    </div>\n\n    <div class="instructions">\n      <div class="instructions-label"><font size="20">Instructions: </font></div>\n      <a class="recipe-url" href="'+o(t(null!=(s=null!=a?a.recipe:a)?s.sourceURL:s,a))+'">Full instructions here</a>\n    </div>\n'+(null!=(s=e["if"].call(i,null!=a?a.displayButton:a,{name:"if",hash:{},fn:n.program(7,l,0),inverse:n.noop,data:l}))?s:"")+"\n\n  </div>\n</div>\n\n</div>\n</div>"},usePartial:!0,useData:!0}),a.register=n({1:function(n,a,e,r,l){var s;return"      "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:l}):s))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l){var s;return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="" id="signin-btn" >LOGIN</a></li>\n<!-- \n          <li><img id="mazzetti" class="navpic" src="img/domm.jpg" alt="Bro Science"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n\n\n\n<div class ="container-fluid">\n<div class="row">  \n  <div class="col-md-4 col-md-offset-4 signin-box" >\n  \n\n  <h2 class="text-center">Register</h2>\n  <div class="error">\n'+(null!=(s=e["if"].call(null!=a?a:{},null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?s:"")+'  </div>\n<!--   <form id="register-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <div>Confirm Password: <input type="password" name="confirm" required /></div>\n    <input type="submit" />\n  </form> -->\n\n\n  <form id="register-form">\n  <div>\n    <label for="inputUsername" class="sr-only"><span>Username</span></label>\n    <input type="username" id="inputUsername" name="username" class="form-control" placeholder="Username" required autofocus/>\n  </div>\n  <div>\n    <label for="inputPassword" class="sr-only"><span>Password</span></label>\n    <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required/>\n  </div>\n  <div>\n    <label for="inputPasswordConfirm" class="sr-only"><span>Confirm Password</span></label>\n    <input type="password" id="inputPasswordConfirm" name="confirm" class="form-control" placeholder="Confirm Password" required/>\n  </div>\n    <input type="submit" class="btn btn-lg btn-warning btn-block"/>\n  </form>\n</div>\n</div>\n</div>'},useData:!0}),a.search=n({1:function(n,a,e,r,l){var s;return"      "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:l}):s))+"\n"},3:function(n,a,e,r,l,s,i){var t;return null!=(t=e.each.call(null!=a?a:{},null!=a?a.recipes:a,{name:"each",hash:{},fn:n.program(4,l,0,s,i),inverse:n.program(6,l,0,s,i),data:l}))?t:""},4:function(n,a,e,r,l,s,i){var t;return null!=(t=n.invokePartial(r.recipe,a,{name:"recipe",hash:{size:null!=i[1]?i[1].size:i[1]},data:l,indent:"      ",helpers:e,partials:r,decorators:n.decorators}))?t:""},6:function(n,a,e,r,l){return"      <p><em>No recipes found.</em></p>\n"},8:function(n,a,e,r,l){var s=n.lambda,i=n.escapeExpression;return'      <div class="ingredients-line">\n        <span class="delete-button" style="color:orange;">x</span><span class="ingredient" data-ingredient-id='+i(s(null!=a?a._id:a,a))+">"+i(s(null!=a?a.name:a,a))+"</span>\n      </div>\n"},10:function(n,a,e,r,l){return"      <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l,s,i){var t,o,d=null!=a?a:{};return(null!=(t=n.invokePartial(r.header,a,{name:"header",data:l,helpers:e,partials:r,decorators:n.decorators}))?t:"")+'\n<div class="welcome">Welcome, <b>'+n.escapeExpression((o=null!=(o=e.currentUser||(null!=a?a.currentUser:a))?o:e.helperMissing,"function"==typeof o?o.call(d,{name:"currentUser",hash:{},data:l}):o))+'</b> (<a href="#" id="logout-link">logout</a>)</div>\n\n<div class="container">\n  <div class="row">\n    <div class="col-md-5 left">\n\n      <h1>Find recipes.</h1>\n\n      <form id="search-form" class="form-inline">\n       <div>Serving size: <input class="form-control" id="serv-size-input" type="number" name="servingsize"/>\n       <input type="submit" value="Scavenge" class="btn btn-warning"/></div>\n     </form>\n\n     <div class="error">\n'+(null!=(t=e["if"].call(d,null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,l,0,s,i),inverse:n.noop,data:l}))?t:"")+'    </div>\n\n    <div class="results">\n'+(null!=(t=e["if"].call(d,null!=a?a.searched:a,{name:"if",hash:{},fn:n.program(3,l,0,s,i),inverse:n.noop,data:l}))?t:"")+'    </div>\n  </div>\n\n  <div class="col-md-5 col-md-offset-1 right">\n    <h1>Your pantry.</h1>\n    <div id="ingredientsList">\n'+(null!=(t=e.each.call(d,null!=a?a.ingredients:a,{name:"each",hash:{},fn:n.program(8,l,0,s,i),inverse:n.program(10,l,0,s,i),data:l}))?t:"")+'    </div>\n\n    <form id="pantry-form" class="form-inline">\n      <div><input class="form-control" id="new-ingredient" name="ingredient" type="text" autocomplete="off" placeholder="Add a new ingredient" required /><input type="submit" value="Add" class="btn btn-warning" id="add-ing-btn"/></div>\n           <div><ul id="results-list" style="list-style-type:none"></ul></div>\n      </form>\n    </div>\n  </div>\n'},usePartial:!0,useData:!0,useDepths:!0}),a.searchAnon=n({1:function(n,a,e,r,l){var s;return"              "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:l}):s))+"\n"},3:function(n,a,e,r,l,s,i){var t;return null!=(t=e.each.call(null!=a?a:{},null!=a?a.recipes:a,{name:"each",hash:{},fn:n.program(4,l,0,s,i),inverse:n.program(6,l,0,s,i),data:l}))?t:""},4:function(n,a,e,r,l,s,i){var t;return null!=(t=n.invokePartial(r.recipe,a,{name:"recipe",hash:{size:null!=i[1]?i[1].size:i[1]},data:l,indent:"                ",helpers:e,partials:r,decorators:n.decorators}))?t:""},6:function(n,a,e,r,l){return"                <p><em>No recipes found.</em></p>\n"},8:function(n,a,e,r,l){var s=n.lambda,i=n.escapeExpression;return'\n          <div class="ingredients-line">\n          <span class="anon-delete-button" style="color:orange;">x</span><span class="ingredient" data-ingredient-id='+i(s(a,a))+">"+i(s(a,a))+"</span>\n\n         </div>\n"},10:function(n,a,e,r,l){return"          <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,l,s,i){var t,o,d=null!=a?a:{},c=e.helperMissing,p="function",u=n.escapeExpression;return(null!=(t=n.invokePartial(r.anonHeader,a,{name:"anonHeader",data:l,helpers:e,partials:r,decorators:n.decorators}))?t:"")+'\n<div class="container" data-ingredientsList-id="'+u((o=null!=(o=e.ingredients||(null!=a?a.ingredients:a))?o:c,typeof o===p?o.call(d,{name:"ingredients",hash:{},data:l}):o))+'" data-recipesList-id="'+u((o=null!=(o=e.recipes||(null!=a?a.recipes:a))?o:c,typeof o===p?o.call(d,{name:"recipes",hash:{},data:l}):o))+'">\n<div class="row">\n    <div class="col-md-5 left">\n        <h1>Find recipes.</h1>\n        \n        <form id="anon-search-form" class="form-inline">\n           <div>Serving size: <input type="number" name="servingsize" class="form-control"/>\n          <input type="submit" value="Scavenge" class="btn btn-warning"/></div>\n\n        </form>\n\n          <div class="error">\n'+(null!=(t=e["if"].call(d,null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,l,0,s,i),inverse:n.noop,data:l}))?t:"")+'          </div>\n\n          <div class="results">\n'+(null!=(t=e["if"].call(d,null!=a?a.searched:a,{name:"if",hash:{},fn:n.program(3,l,0,s,i),inverse:n.noop,data:l}))?t:"")+'          </div>\n    </div>\n\n    <div class="col-md-5 col-md-offset-1 right">\n      <h1>Your pantry.</h1>\n\n      <div id="ingredientsList">\n'+(null!=(t=e.each.call(d,null!=a?a.ingredients:a,{name:"each",hash:{},fn:n.program(8,l,0,s,i),inverse:n.program(10,l,0,s,i),data:l}))?t:"")+'      </div>\n\n      <form id="anon-pantry-form" class="form-inline">\n        <div><input class="form-control" id="new-ingredient" name="ingredient" autocomplete="off" placeholder="Add a new ingredient" required />\n        <input type="submit" value="Add" class="btn btn-warning"/></div>\n        <div><ul id="results-list" style="list-style-type:none"></ul></div>\n      </form>\n  </div>\n  </div>\n'},usePartial:!0,useData:!0,useDepths:!0})}();


})();

