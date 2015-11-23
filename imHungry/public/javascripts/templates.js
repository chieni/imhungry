
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
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
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "\n<div class=\"recipe\" data-recipeid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + ">\n  <p>"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n  <img src = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.imageURLs : depth0)) != null ? stack1["1"] : stack1), depth0))
    + ">\n  \n</div>\n\n\n";
},"useData":true});
templates['recipeView'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "      <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"recipe\" data-recipeid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.recipe : depth0)) != null ? stack1._id : stack1), depth0))
    + ">\n  <p>"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n    <img src = "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.imageURLs : depth0)) != null ? stack1["0"] : stack1), depth0))
    + ">\n  <label>Ingredients: </label>\n  <ul class=\"ingredients\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n\n  <label>Serving size: </label><p> "
    + alias2(((helper = (helper = helpers.servingSize || (depth0 != null ? depth0.servingSize : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"servingSize","hash":{},"data":data}) : helper)))
    + "</p>\n\n  <label>Instructions: </label>\n  <p>"
    + alias2(((helper = (helper = helpers.sourceURL || (depth0 != null ? depth0.sourceURL : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"sourceURL","hash":{},"data":data}) : helper)))
    + "</p>\n</div>";
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

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.recipes : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.recipe,depth0,{"name":"recipe","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "                <p><em>No recipes found. We suggest that you allow additional ingredients in your search.</em></p>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <li class=\"ingredient\" style=\"list-style-type:none\" data-ingredient-id="
    + alias2(alias1(depth0, depth0))
    + ">"
    + alias2(alias1(depth0, depth0))
    + "<button class=\"delete-button\" type=\"button\">Delete</button></li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "        <p><em>No ingredients yet!</em></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<p>Welcome, <b>"
    + container.escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentUser","hash":{},"data":data}) : helper)))
    + "</b> (<a href=\"#\" id=\"logout-link\">logout</a>)</p>\n\n<div class=\"wrapper\">\n    <div class=\"left\">\n        <h1>Find recipes.</h1>\n\n        <form id=\"search-form\">\n<!--           <div>Serving size: <input type=\"number\" name=\"servingsize\"/></div>\n          <div>Additional ingredients: <input type=\"text\" name=\"additional\"/></div> -->\n          <input type=\"submit\" value=\"Scavenge\"/>\n        </form>\n\n          <div class=\"error\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n\n          <div class=\"results\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.searched : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\n    </div>\n\n    <div class=\"right\">\n      <h1>Your pantry.</h1>\n\n      <div id=\"ingredientsList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "      </div>\n\n      <form id=\"pantry-form\">\n        <div>Add a new ingredient: <input type=\"text\" id=\"new-ingredient\" name=\"ingredient\" required />\n        <input type=\"submit\" value=\"Add\"/></div>\n      </form>\n  </div>\n";
},"usePartial":true,"useData":true});
})();
=======
!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.index=n({1:function(n,e,a,r,i){var l;return"      "+n.escapeExpression((l=null!=(l=a.error||(null!=e?e.error:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:i}):l))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l;return'<div id="homepage">\n  <h1>ImHungry</h1>\n  <div id="signin">\n  <h1>Sign in</h1>\n  <div class="error">\n'+(null!=(l=a["if"].call(null!=e?e:{},null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+'  </div>\n  <form id="signin-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <input type="submit" />\n  </form>\n</div>\n<p>Or register if you are a new user:</p>\n  <button id="register-btn">Register</button>\n</div>'},useData:!0}),e.ingredient=n({compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l,s=n.lambda,t=n.escapeExpression;return'<div class="ingredient">\n  <label>'+t(s(null!=(l=null!=e?e.ingredient:e)?l.name:l,e))+" </label><p>: "+t(s(null!=(l=null!=e?e.ingredient:e)?l.amount:l,e))+" </p>\n</div>"},useData:!0}),e.recipe=n({1:function(n,e,a,r,i){return"      <li>"+n.escapeExpression(n.lambda(e,e))+"</li>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l,s,t=null!=e?e:{},u=a.helperMissing,o="function",d=n.escapeExpression;return'\n<div class="recipe" data-recipeid='+d((s=null!=(s=a._id||(null!=e?e._id:e))?s:u,typeof s===o?s.call(t,{name:"_id",hash:{},data:i}):s))+">\n  <p>"+d((s=null!=(s=a.name||(null!=e?e.name:e))?s:u,typeof s===o?s.call(t,{name:"name",hash:{},data:i}):s))+"</p>\n  <img src = "+d((s=null!=(s=a.imageURLs||(null!=e?e.imageURLs:e))?s:u,typeof s===o?s.call(t,{name:"imageURLs",hash:{},data:i}):s))+'>\n  <label>Ingredients: </label>\n  <ul class="ingredients">\n'+(null!=(l=a.each.call(t,null!=e?e.ingredients:e,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+"  </ul>\n\n  <label>Serving size: </label><p> "+d((s=null!=(s=a.servingSize||(null!=e?e.servingSize:e))?s:u,typeof s===o?s.call(t,{name:"servingSize",hash:{},data:i}):s))+"</p>\n\n  <label>Instructions: </label>\n  <p>"+d((s=null!=(s=a.sourceURL||(null!=e?e.sourceURL:e))?s:u,typeof s===o?s.call(t,{name:"sourceURL",hash:{},data:i}):s))+"</p>\n</div>\n\n\n"},useData:!0}),e.recipeView=n({1:function(n,e,a,r,i){return"      <li>"+n.escapeExpression(n.lambda(e,e))+"</li>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l,s,t=n.escapeExpression,u=null!=e?e:{},o=a.helperMissing,d="function";return'<div class="recipe" data-recipeid='+t(n.lambda(null!=(l=null!=e?e.recipe:e)?l._id:l,e))+">\n  <p>"+t((s=null!=(s=a.name||(null!=e?e.name:e))?s:o,typeof s===d?s.call(u,{name:"name",hash:{},data:i}):s))+'</p>\n  <label>Ingredients: </label>\n  <ul class="ingredients">\n'+(null!=(l=a.each.call(u,null!=e?e.ingredients:e,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+"  </ul>\n\n  <label>Serving size: </label><p> "+t((s=null!=(s=a.servingSize||(null!=e?e.servingSize:e))?s:o,typeof s===d?s.call(u,{name:"servingSize",hash:{},data:i}):s))+"</p>\n\n  <label>Instructions: </label>\n  <p>"+t((s=null!=(s=a.sourceURL||(null!=e?e.sourceURL:e))?s:o,typeof s===d?s.call(u,{name:"sourceURL",hash:{},data:i}):s))+"</p>\n</div>"},useData:!0}),e.register=n({1:function(n,e,a,r,i){var l;return"      "+n.escapeExpression((l=null!=(l=a.error||(null!=e?e.error:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:i}):l))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l;return'<div id="register">\n  <a href="#" id="home-link">Back to Home</a>\n  <h1>Register</h1>\n  <div class="error">\n'+(null!=(l=a["if"].call(null!=e?e:{},null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+'  </div>\n  <form id="register-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <div>Confirm Password: <input type="password" name="confirm" required /></div>\n    <input type="submit" />\n  </form>\n</div>'},useData:!0}),e.search=n({1:function(n,e,a,r,i){var l;return"              "+n.escapeExpression((l=null!=(l=a.error||(null!=e?e.error:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:i}):l))+"\n"},3:function(n,e,a,r,i){var l;return null!=(l=a.each.call(null!=e?e:{},null!=e?e.recipes:e,{name:"each",hash:{},fn:n.program(4,i,0),inverse:n.program(6,i,0),data:i}))?l:""},4:function(n,e,a,r,i){var l;return null!=(l=n.invokePartial(r.recipe,e,{name:"recipe",data:i,indent:"                ",helpers:a,partials:r,decorators:n.decorators}))?l:""},6:function(n,e,a,r,i){return"                <p><em>No recipes found. We suggest that you allow additional ingredients in your search.</em></p>\n"},8:function(n,e,a,r,i){var l=n.lambda,s=n.escapeExpression;return'        <li class="ingredient" style="list-style-type:none" data-ingredient-id='+s(l(e,e))+">"+s(l(e,e))+'<button class="delete-button" type="button">Delete</button></li>\n'},10:function(n,e,a,r,i){return"        <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l,s,t=null!=e?e:{};return"<p>Welcome, <b>"+n.escapeExpression((s=null!=(s=a.currentUser||(null!=e?e.currentUser:e))?s:a.helperMissing,"function"==typeof s?s.call(t,{name:"currentUser",hash:{},data:i}):s))+'</b> (<a href="#" id="logout-link">logout</a>)</p>\n\n<div class="wrapper">\n    <div class="left">\n        <h1>Find recipes.</h1>\n\n        <form id="search-form">\n<!--           <div>Serving size: <input type="number" name="servingsize"/></div>\n          <div>Additional ingredients: <input type="text" name="additional"/></div> -->\n          <input type="submit" value="Scavenge"/>\n        </form>\n\n          <div class="error">\n'+(null!=(l=a["if"].call(t,null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+'          </div>\n\n          <div class="results">\n'+(null!=(l=a["if"].call(t,null!=e?e.searched:e,{name:"if",hash:{},fn:n.program(3,i,0),inverse:n.noop,data:i}))?l:"")+'          </div>\n    </div>\n\n    <div class="right">\n      <h1>Your pantry.</h1>\n\n      <div id="ingredientsList">\n'+(null!=(l=a.each.call(t,null!=e?e.ingredients:e,{name:"each",hash:{},fn:n.program(8,i,0),inverse:n.program(10,i,0),data:i}))?l:"")+'      </div>\n\n      <form id="pantry-form">\n        <div>Add a new ingredient: <input type="text" id="new-ingredient" name="ingredient" required />\n        <input type="submit" value="Add"/></div>\n      </form>\n  </div>\n'},usePartial:!0,useData:!0})}();

