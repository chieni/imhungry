!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.index=n({compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){return'<div id="homepage">\n  <h1>ImHungry</h1>\n  <p>You must be signed in to continue.</p>\n  <button id="signin-btn">Sign in</button>\n  <button id="register-btn">Register</button>\n</div>'},useData:!0}),e.ingredient=n({compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l,t=n.lambda,s=n.escapeExpression;return'<div class="ingredient">\n  <label>'+s(t(null!=(l=null!=e?e.ingredient:e)?l.name:l,e))+" </label><p>: "+s(t(null!=(l=null!=e?e.ingredient:e)?l.amount:l,e))+" </p>\n</div>"},useData:!0}),e.recipe=n({1:function(n,e,r,i,a){return"      <li>"+n.escapeExpression(n.lambda(e,e))+"</li>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l,t=n.lambda,s=n.escapeExpression;return'\n<div class="recipe" data-recipename='+s(t(null!=(l=null!=e?e.recipe:e)?l.name:l,e))+">\n  <label>"+s(t(null!=(l=null!=e?e.recipe:e)?l.name:l,e))+'</label>\n\n  <label>Ingredients: </label>\n  <ul class="ingredients">\n'+(null!=(l=r.each.call(null!=e?e:{},null!=(l=null!=e?e.recipe:e)?l.ingredients:l,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a}))?l:"")+"  </ul>\n\n  <label>Serving size: </label><p> "+s(t(null!=(l=null!=e?e.recipe:e)?l.servingsize:l,e))+"</p>\n\n  <label>Instructions: </label>\n  <p>"+s(t(null!=(l=null!=e?e.recipe:e)?l.instructions:l,e))+"</p>\n</div>\n\n\n"},useData:!0}),e.register=n({1:function(n,e,r,i,a){var l;return"      "+n.escapeExpression((l=null!=(l=r.error||(null!=e?e.error:e))?l:r.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:a}):l))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l;return'<div id="register">\n  <a href="#" id="home-link">Back to Home</a>\n  <h1>Register</h1>\n  <div class="error">\n'+(null!=(l=r["if"].call(null!=e?e:{},null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a}))?l:"")+'  </div>\n  <form id="register-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <div>Confirm Password: <input type="password" name="confirm" required /></div>\n    <input type="submit" />\n  </form>\n</div>'},useData:!0}),e.search=n({1:function(n,e,r,i,a){var l;return"              "+n.escapeExpression((l=null!=(l=r.error||(null!=e?e.error:e))?l:r.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:a}):l))+"\n"},3:function(n,e,r,i,a){var l;return null!=(l=r.each.call(null!=e?e:{},null!=e?e.recipes:e,{name:"each",hash:{},fn:n.program(4,a,0),inverse:n.program(6,a,0),data:a}))?l:""},4:function(n,e,r,i,a){var l;return null!=(l=n.invokePartial(i.recipe,e,{name:"recipe",data:a,indent:"              ",helpers:r,partials:i,decorators:n.decorators}))?l:""},6:function(n,e,r,i,a){return"              <p><em>No recipes found. We suggest that you allow additional ingredients in your search.</em></p>\n"},8:function(n,e,r,i,a){var l;return null!=(l=n.invokePartial(i.ingredient,e,{name:"ingredient",data:a,indent:"        ",helpers:r,partials:i,decorators:n.decorators}))?l:""},10:function(n,e,r,i,a){return"        <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l,t=null!=e?e:{};return'<div class="wrapper">\n    <div class="left">\n        <h1>Find recipes.</h1>\n        <form id="search-form">\n          <div>Serving size: <input type="number" name="servingsize"/></div>\n          <div>Additional ingredients: <input type="text" name="additional"/></div>\n          <input type="submit" value="Scavenge"/>\n        </form>\n\n          <div class="error">\n'+(null!=(l=r["if"].call(t,null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a}))?l:"")+"          </div>\n\n"+(null!=(l=r["if"].call(t,null!=e?e.searched:e,{name:"if",hash:{},fn:n.program(3,a,0),inverse:n.noop,data:a}))?l:"")+'    </div>\n    <div class="right">\n      <h1>Your pantry.</h1>\n      <div class="pantry">\n\n'+(null!=(l=r.each.call(t,null!=e?e.ingredient:e,{name:"each",hash:{},fn:n.program(8,a,0),inverse:n.program(10,a,0),data:a}))?l:"")+'\n      <div>\n        <label for="new-ingredient-input">Add a new ingredient:</label>\n        <input type="text" id="new-ingredient-input" />\n        <button id="submit-new-ingredient">Add</button>\n      </div>\n    </div>\n  </div>\n'},usePartial:!0,useData:!0}),e.signin=n({1:function(n,e,r,i,a){var l;return"      "+n.escapeExpression((l=null!=(l=r.error||(null!=e?e.error:e))?l:r.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:a}):l))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l;return'<div id="signin">\n  <a href="#" id="home-link">Back to Home</a>\n  <h1>Sign in</h1>\n  <div class="error">\n'+(null!=(l=r["if"].call(null!=e?e:{},null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a}))?l:"")+'  </div>\n  <form id="signin-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <input type="submit" />\n  </form>\n</div>'},useData:!0})}();
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
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<p>Welcome, "
    + container.escapeExpression(((helper = (helper = helpers.currentUser || (depth0 != null ? depth0.currentUser : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentUser","hash":{},"data":data}) : helper)))
    + " (<a href=\"#\" id=\"logout-link\">logout</a>)</p>\n\n<div class=\"wrapper\">\n    <div class=\"left\">\n        <h1>Find recipes.</h1>\n        <div class=\"search\">\n<!--           <div><label>Serving size</label> <input type=\"text\" name=\"servingsize\"/></div>\n          <div><label>Additional ingredients</label> <input type=\"text\" name=\"addIngredients\"/></div> -->\n          <div><button id=\"submit-new-ingredient\">Scavenge</button></div>\n        </div>\n    </div>\n    <div class=\"right\">\n      <h1>Your pantry.</h1>\n      <div class=\"pantry\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredient : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\n<!--       <div>\n\n        <button id=\"submit-new-ingredient\">Add</button>\n      </div> -->\n      <form id=\"pantry-form\">\n        <div>Add a new ingredient: <input type=\"text\" id=\"new-ingredient-input\" required /></div>\n        <input type=\"submit\" value=\"Add\"/>\n      </form>\n    </div>\n  </div>";
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
>>>>>>> 1bbcaa6613099633801512ff614af64fe3cd4115
>>>>>>> d3f7b181c0eb111224dff407178a5029b463498e
