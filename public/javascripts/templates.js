(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['anonHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a class=\"white\" href=\"\" id=\"register-btn\">SIGN UP</a></li>\n           <li class=\"active\"><a class=\"white\"  href=\"\" id=\"signin-btn\" >LOGIN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  ";
},"useData":true});
templates['cookbook'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.cookbookRecipe,depth0,{"name":"cookbookRecipe","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "                <p><em>Your cookbook is currently empty. Save recipes to stash them here!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"cookbook-view\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"cookbook\">\n	<div class=\"container\">\n	<div class=\"search-row\">\n	<div class=\"col-md-12 cookbook-box\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "          </div>\n    </div>\n    </div>\n    </div>\n</div>";
},"usePartial":true,"useData":true});
templates['cookbookRecipeView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class = \"cookbookItem\" data-recipid="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n\n	<div class=\"cookbookRecipe recipe-overlay\" data-recipeid="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + ">\n	  <p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n	  <img class=\"recipe-image\" src = "
    + alias4(container.lambda(((stack1 = (depth0 != null ? depth0.imageURLs : depth0)) != null ? stack1["1"] : stack1), depth0))
    + ">\n	</div>\n	<button id=\"recipe-delete-btn\" data-id="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + " class=\"btn btn-lg btn-warning recipe-delete-btn\" type=\"button\">Delete</button>\n</div>\n\n\n";
},"useData":true});
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a class=\"white\" href=\"\">PANTRY</a></li>\n          <li class=\"active\"><a class=\"white\"  href=\"\" id=\"cookbook-btn\">COOKBOOK</a></li>\n          <li class=\"active\"><a class=\"white\"  href=\"#\" id=\"logout-link\">LOGOUT</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  ";
},"useData":true});
templates['hook'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            "
    + container.escapeExpression(((helper = (helper = helpers["anon-sizing-error"] || (depth0 != null ? depth0["anon-sizing-error"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"anon-sizing-error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = container.invokePartial(partials.anonHeader,depth0,{"name":"anonHeader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n\n<div class =\"container-fluid\">\n<div class=\"row\">  \n  <div class=\"hook-box\">\n  <form id=\"hook-search-form\">\n    <div class=\"hook-text-line\">\n    <span class=\"hook-text\">I am cooking for </span> \n    <input id=\"hook-number-input\" type=\"number\" value=\"1\"/> \n    <span class=\"hook-text\"> and I have </span>\n    <span class=\"hook-vert-line\"> | </span>\n    \n      <input id=\"hook-ingr-input\" type=\"text\" placeholder=\"corn, pork shoulder, cilantro, etc.\" required/>\n       <div class=\"anon-sizing-error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["anon-sizing-error"] : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n\n      </div>\n        <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    \n      <div class=\"hook-search-btn\">\n        <input type=\"submit\" value=\"SCAVENGE\" class=\"btn btn-warning\"/>\n      </div>\n    </form>\n  </div>\n</div>\n</div>";
},"usePartial":true,"useData":true});
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a class=\"white\" href=\"\" id=\"register-btn\">SIGN UP</a></li>\n<!-- \n          <li><img id=\"mazzetti\" class=\"navpic\" src=\"img/domm.jpg\" alt=\"Bro Science\"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  \n\n\n<div class =\"container-fluid\">\n<div class=\"row\">  \n  <div class=\"col-md-4 col-md-offset-4 signin-box\" >\n    <h2 class=\"text-center\">Sign in</h2>\n      <div class=\"error\">\n"
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
    + "</p><p><em>	Number of Extra Ingredients: "
    + alias4(((helper = (helper = helpers.numUnmatched || (depth0 != null ? depth0.numUnmatched : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numUnmatched","hash":{},"data":data}) : helper)))
    + "</em></p>\n  <img class=\"recipe-image\" src = "
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
    return "      <a class=\"back-to-search\">&lt; Back to Search Results</a> \n";
},"7":function(container,depth0,helpers,partials,data) {
    return "      <a class=\"back-to-search-anon\">&lt; Back to Search Results</a> \n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"save-recipe-btn\">\n      <button id=\"save-btn\" data-id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + " data-servingsize="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + " class=\"btn btn-lg btn-warning save-btn\">Save</button>\n    </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"star\"><span>☆</span></div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"star\"><span>★</span></div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"star\" ><span>☆</span></div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"star\"  ><span>★</span></div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"star\"  ><span>☆</span></div>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "      <div class=\"rating\">\n        <div class=\"rate\">Rate this Recipe</div>\n        <a class=\"star\" href=\"#\"  id=\"five-star\" data-recipeid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + " data-servingsize="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + " data-displaybutton="
    + alias2(((helper = (helper = helpers.displayButton || (depth0 != null ? depth0.displayButton : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"displayButton","hash":{},"data":data}) : helper)))
    + "><span>☆</span></a>\n        <a class=\"star\" href=\"#\"  id=\"four-star\" data-recipeid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + " data-servingsize="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + " data-displaybutton="
    + alias2(((helper = (helper = helpers.displayButton || (depth0 != null ? depth0.displayButton : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"displayButton","hash":{},"data":data}) : helper)))
    + "><span>☆</span></a>\n        <a class=\"star\" href=\"#\"  id=\"three-star\" data-recipeid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + " data-servingsize="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + " data-displaybutton="
    + alias2(((helper = (helper = helpers.displayButton || (depth0 != null ? depth0.displayButton : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"displayButton","hash":{},"data":data}) : helper)))
    + "><span>☆</span></a>\n        <a class=\"star\" href=\"#\"  id=\"two-star\" data-recipeid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + " data-servingsize="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + " data-displaybutton="
    + alias2(((helper = (helper = helpers.displayButton || (depth0 != null ? depth0.displayButton : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"displayButton","hash":{},"data":data}) : helper)))
    + "><span>☆</span></a>\n        <a class=\"star\" href=\"#\"  id=\"one-star\" data-recipeid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + " data-servingsize="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + " data-displaybutton="
    + alias2(((helper = (helper = helpers.displayButton || (depth0 != null ? depth0.displayButton : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"displayButton","hash":{},"data":data}) : helper)))
    + "><span>☆</span></a>\n      </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "       <input class=\"form-control\" id=\"serv-size-input\" value="
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + " type=\"number\" name=\"servingsize\" />\n       \n       <input type=\"submit\" value=\"Scale Recipe\" class=\"btn btn-warning\"/>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "       <span style=\"display:inline-block\"> "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.servingSize : stack1), depth0))
    + "</span>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          "
    + container.escapeExpression(((helper = (helper = helpers["sizing-error"] || (depth0 != null ? depth0["sizing-error"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"sizing-error","hash":{},"data":data}) : helper)))
    + "\n";
},"29":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"ingredient\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression, alias4=helpers.helperMissing, alias5="function";

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.currentUser : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<div data-recipeid="
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + ">\n\n<div class=\"container\" data-ingredientsList-id=\""
    + alias3(((helper = (helper = helpers.ingredients || (depth0 != null ? depth0.ingredients : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data}) : helper)))
    + "\" data-servingSize="
    + alias3(((helper = (helper = helpers.servingSize || (depth0 != null ? depth0.servingSize : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"servingSize","hash":{},"data":data}) : helper)))
    + ">\n\n<div class=\"search-row recipe-box\">\n\n\n  <div class=\"col-md-4\">\n\n    <div class=\"back-btn\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.currentUser : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n  </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayButton : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n    <div class=\"recipe-view-img\" style=\"background-image: url("
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.imageURLs : stack1)) != null ? stack1["0"] : stack1), depth0))
    + ")\"></div>\n\n    <div class=\"recipe-name\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n\n    <div class=\"recipe-ratings-wrapper\">\n\n        \n\n        <div class=\"aggregaterating\">\n      <div class=\"rate\">Rating</div>\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),5,{"name":"compare","hash":{"operator":"<"},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),5,{"name":"compare","hash":{"operator":">="},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),4,{"name":"compare","hash":{"operator":"<"},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),4,{"name":"compare","hash":{"operator":">="},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),3,{"name":"compare","hash":{"operator":"<"},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),3,{"name":"compare","hash":{"operator":">="},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),2,{"name":"compare","hash":{"operator":"<"},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),2,{"name":"compare","hash":{"operator":">="},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),1,{"name":"compare","hash":{"operator":"<"},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias4).call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.rating : stack1),1,{"name":"compare","hash":{"operator":">="},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.currentUser : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n\n\n  </div>\n\n\n\n  <div class=\"col-md-6 col-md-offset-1\">\n\n    <div class=\"recipe-info-wrapper\">\n    \n    <form id=\"scale-form\" class=\"form-inline\" data-recipeid="
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + ">\n       <div class=\"serving-line\">Serving size: \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.currentUser : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + "       </div>\n       <div class=\"sizing-error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["sizing-error"] : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </div>\n     </form>\n    \n    <div class=\"ingredients\">\n      <div class=\"ingredients-header\">Ingredients: </div>\n      \n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.ingredients : stack1),{"name":"each","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"instructions\">\n      <div class=\"instructions-label\">Instructions:</div>\n      <a class=\"recipe-url btn btn-lg btn-warning save-btn\" href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1.sourceURL : stack1), depth0))
    + "\">Full instructions here</a>\n    </div>\n    </div>\n\n\n\n\n\n\n\n\n</div>\n\n\n\n\n\n\n</div>\n</div>\n\n\n\n";
},"usePartial":true,"useData":true});
templates['register'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<nav class=\"navbar navbar-static-top\">\n    <div class=\"container-fluid \">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"header-logo\"></div></a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a class=\"white\" href=\"\" id=\"signin-btn\" >LOGIN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n\n\n\n<div class =\"container-fluid\">\n<div class=\"row\">  \n  <div class=\"col-md-4 col-md-offset-4 signin-box\" >\n  \n\n  <h2 class=\"text-center\">Get Cooking</h2>\n  <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n\n  <form id=\"register-form\">\n  <div>\n    <label for=\"inputUsername\" class=\"sr-only\"><span>Username</span></label>\n    <input type=\"username\" id=\"inputUsername\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus/>\n  </div>\n  <div>\n    <label for=\"inputPassword\" class=\"sr-only\"><span>Password</span></label>\n    <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required/>\n  </div>\n  <div>\n    <label for=\"inputPasswordConfirm\" class=\"sr-only\"><span>Confirm Password</span></label>\n    <input type=\"password\" id=\"inputPasswordConfirm\" name=\"confirm\" class=\"form-control\" placeholder=\"Confirm Password\" required/>\n  </div>\n    <input type=\"submit\" class=\"btn btn-lg btn-warning btn-block\"/>\n  </form>\n</div>\n</div>\n</div>";
},"useData":true});
templates['search'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "         <div class=\"spinner\"></div>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.recipes : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.recipe,depth0,{"name":"recipe","hash":{"size":(depths[1] != null ? depths[1].size : depths[1])},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "      <p><em>No recipes found. Please add more ingredients to your pantry!</em></p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "      <form id=\"load-more-form\" class=\"form-inline\" data-more="
    + container.escapeExpression(((helper = (helper = helpers.more || (depth0 != null ? depth0.more : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"more","hash":{},"data":data}) : helper)))
    + ">\n        <div><input type=\"submit\" value=\"LOAD MORE\" id=\"load-more-btn\" class=\"load-more btn btn-warning\" disabled/></div>\n      </form>\n      \n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "      <div class=\"ingredients-line\">\n        <span class=\"delete-button\" style=\"color:orange;\">x</span>\n        <span class=\"ingredient\" data-ingredient-id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ingredient : depth0)) != null ? stack1._id : stack1), depth0))
    + ">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ingredient : depth0)) != null ? stack1.name : stack1), depth0))
    + "</span>\n        <input type=\"text\" class=\"edit-amt form-control\" name=\"editedIngAmt\" type=\"text\" autocomplete=\"off\"></input>\n        <a class=\"ingredient-amt\">( "
    + alias2(alias1((depth0 != null ? depth0.amount : depth0), depth0))
    + " )</a>\n      </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "      <p><em>No ingredients yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "\n<div id=\"search-view\">\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"container\">\n  <div class=\"search-row\">\n  \n    <div class=\"col-md-8 left\">\n      <h1>Find recipes.</h1>\n\n      <form id=\"search-form\" class=\"form-inline\">\n       <div class=\"serving-line\">\n       <input type=\"submit\" value=\"SCAVENGE\" class=\"btn btn-warning\"/></div>\n     </form>\n\n     <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <div class=\"results\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loading : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.searched : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n\n  <div class=\"col-md-3 col-md-offset-1 right\">\n    <h1>"
    + container.escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentUser","hash":{},"data":data}) : helper)))
    + "'s pantry.</h1>\n    <div id=\"ingredientsList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.program(14, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\n\n     <div class=\"pantry-error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n    <form id=\"pantry-form\" class=\"form-inline\">\n      <div class = \"form-group ui-widget\">\n        <input class=\"form-control\" id=\"new-ingredient\" name=\"ingredient\" type=\"text\" autocomplete=\"off\" placeholder=\"Add a new ingredient\" required/>\n        <input class=\"form-control\" id=\"new-ingredient-amt\" name=\"ingredientAmt\" type=\"text\" autocomplete=\"off\" placeholder=\"Amount\"/>\n        <input type=\"submit\" value=\"ADD\" class=\"btn btn-warning\" id=\"add-ing-btn\" disabled/>\n      </div>\n           <!--<div><ul id=\"results-list\" style=\"list-style-type:none\"></ul></div>-->\n      </form>\n    </div>\n  </div>\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});
templates['searchAnon'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "              "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "             <div class=\"spinner\"></div>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.recipe,depth0,{"name":"recipe","hash":{"size":(depths[1] != null ? depths[1].size : depths[1])},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "                <p><em>No recipes found.</em></p>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "\n          <div class=\"ingredients-line\">\n          <span class=\"anon-delete-button\" style=\"color:orange;\">x</span><span class=\"ingredient\" data-ingredient-id="
    + alias2(alias1(depth0, depth0))
    + ">"
    + alias2(alias1(depth0, depth0))
    + "</span>\n\n         </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "          <p><em>No ingredients yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = container.invokePartial(partials.anonHeader,depth0,{"name":"anonHeader","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class=\"container\" data-ingredientsList-id=\""
    + alias4(((helper = (helper = helpers.ingredients || (depth0 != null ? depth0.ingredients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data}) : helper)))
    + "\" data-recipesList-id=\""
    + alias4(((helper = (helper = helpers.recipes || (depth0 != null ? depth0.recipes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipes","hash":{},"data":data}) : helper)))
    + "\" data-serving-size=\""
    + alias4(((helper = (helper = helpers.servingSize || (depth0 != null ? depth0.servingSize : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"servingSize","hash":{},"data":data}) : helper)))
    + "\">\n\n<div class=\"row\">\n    <div class=\"col-md-8 left\">\n        <h1>Find recipes.</h1>\n\n        <form id=\"anon-search-form\" class=\"form-inline\">\n         <div class=\"serving-line\">\n         <input type=\"submit\" value=\"SCAVENGE\" class=\"btn btn-warning\"/></div>\n        </form>\n\n          <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n\n          <div class=\"results\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.loading : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n      \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.searched : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n    </div>\n\n    <div class=\"col-md-3 col-md-offset-1 right\">\n      <h1>Your pantry.</h1>\n\n      <div id=\"ingredientsList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.program(12, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "      </div>\n\n      <form id=\"anon-pantry-form\" class=\"form-inline\">\n        <div><input class=\"form-control\" id=\"new-ingredient\" name=\"ingredient\" autocomplete=\"off\" placeholder=\"Add a new ingredient\" required />\n        <input type=\"submit\" value=\"Add\" class=\"btn btn-warning\" id=\"anon-add-ing-btn\" disabled/></div>\n        <div><ul id=\"results-list\" style=\"list-style-type:none\"></ul></div>\n      </form>\n\n      <div class=\"anon-pantry-error\"> </div>\n      <button class=\"btn btn-lg btn-warning anon-create-btn\" data-toggle=\"modal\" data-target=\"#signup-modal\">Create Account</button>\n\n\n      <!-- Modal -->\n      <div id=\"signup-modal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"anon-dialog modal-dialog\">\n\n          <!-- Modal content-->\n          <div class=\"anon-dialog-content  modal-content\">\n\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <div class=\"anon-modal-title\">Get Cooking</div>\n            </div>\n            <div class=\"modal-body\">\n              \n                <form id=\"anon-register-form\">\n                <div>\n                  <label for=\"inputUsername\" class=\"sr-only\"><span>Username</span></label>\n                  <input type=\"username\" id=\"inputUsername\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus/>\n                </div>\n                <div>\n                  <label for=\"inputPassword\" class=\"sr-only\"><span>Password</span></label>\n                  <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required/>\n                </div>\n                <div>\n                  <label for=\"inputPasswordConfirm\" class=\"sr-only\"><span>Confirm Password</span></label>\n                  <input type=\"password\" id=\"inputPasswordConfirm\" name=\"confirm\" class=\"form-control\" placeholder=\"Confirm Password\" required/>\n                </div>\n                <div class=\"anon-error\"></div>\n                  <input type=\"submit\" class=\"btn btn-lg btn-warning btn-block\"/>\n                </form>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n  </div>\n  </div>\n";
},"usePartial":true,"useData":true,"useDepths":true});
})();