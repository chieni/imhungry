!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.index=n({1:function(n,e,a,r,i){var l;return"      "+n.escapeExpression((l=null!=(l=a.error||(null!=e?e.error:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:i}):l))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l;return'<div id="homepage">\n  <h1>ImHungry</h1>\n  <div id="signin">\n  <h1>Sign in</h1>\n  <div class="error">\n'+(null!=(l=a["if"].call(null!=e?e:{},null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+'  </div>\n  <form id="signin-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <input type="submit" />\n  </form>\n</div>\n<p>Or register if you are a new user:</p>\n  <button id="register-btn">Register</button>\n</div>'},useData:!0}),e.ingredient=n({compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l,s=n.lambda,t=n.escapeExpression;return'<div class="ingredient">\n  <label>'+t(s(null!=(l=null!=e?e.ingredient:e)?l.name:l,e))+" </label><p>: "+t(s(null!=(l=null!=e?e.ingredient:e)?l.amount:l,e))+" </p>\n</div>"},useData:!0}),e.recipe=n({1:function(n,e,a,r,i){return"      <li>"+n.escapeExpression(n.lambda(e,e))+"</li>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l,s,t=null!=e?e:{},u=a.helperMissing,o="function",d=n.escapeExpression;return'\n<div class="recipe" data-recipeid='+d((s=null!=(s=a._id||(null!=e?e._id:e))?s:u,typeof s===o?s.call(t,{name:"_id",hash:{},data:i}):s))+">\n  <p>"+d((s=null!=(s=a.name||(null!=e?e.name:e))?s:u,typeof s===o?s.call(t,{name:"name",hash:{},data:i}):s))+"</p>\n  <img src = "+d((s=null!=(s=a.imageURLs||(null!=e?e.imageURLs:e))?s:u,typeof s===o?s.call(t,{name:"imageURLs",hash:{},data:i}):s))+'>\n  <label>Ingredients: </label>\n  <ul class="ingredients">\n'+(null!=(l=a.each.call(t,null!=e?e.ingredients:e,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+"  </ul>\n\n  <label>Serving size: </label><p> "+d((s=null!=(s=a.servingSize||(null!=e?e.servingSize:e))?s:u,typeof s===o?s.call(t,{name:"servingSize",hash:{},data:i}):s))+"</p>\n\n  <label>Instructions: </label>\n  <p>"+d((s=null!=(s=a.sourceURL||(null!=e?e.sourceURL:e))?s:u,typeof s===o?s.call(t,{name:"sourceURL",hash:{},data:i}):s))+"</p>\n</div>\n\n\n"},useData:!0}),e.recipeView=n({1:function(n,e,a,r,i){return"      <li>"+n.escapeExpression(n.lambda(e,e))+"</li>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l,s,t=n.escapeExpression,u=null!=e?e:{},o=a.helperMissing,d="function";return'<div class="recipe" data-recipeid='+t(n.lambda(null!=(l=null!=e?e.recipe:e)?l._id:l,e))+">\n  <p>"+t((s=null!=(s=a.name||(null!=e?e.name:e))?s:o,typeof s===d?s.call(u,{name:"name",hash:{},data:i}):s))+'</p>\n  <label>Ingredients: </label>\n  <ul class="ingredients">\n'+(null!=(l=a.each.call(u,null!=e?e.ingredients:e,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+"  </ul>\n\n  <label>Serving size: </label><p> "+t((s=null!=(s=a.servingSize||(null!=e?e.servingSize:e))?s:o,typeof s===d?s.call(u,{name:"servingSize",hash:{},data:i}):s))+"</p>\n\n  <label>Instructions: </label>\n  <p>"+t((s=null!=(s=a.sourceURL||(null!=e?e.sourceURL:e))?s:o,typeof s===d?s.call(u,{name:"sourceURL",hash:{},data:i}):s))+"</p>\n</div>"},useData:!0}),e.register=n({1:function(n,e,a,r,i){var l;return"      "+n.escapeExpression((l=null!=(l=a.error||(null!=e?e.error:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:i}):l))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l;return'<div id="register">\n  <a href="#" id="home-link">Back to Home</a>\n  <h1>Register</h1>\n  <div class="error">\n'+(null!=(l=a["if"].call(null!=e?e:{},null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+'  </div>\n  <form id="register-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <div>Confirm Password: <input type="password" name="confirm" required /></div>\n    <input type="submit" />\n  </form>\n</div>'},useData:!0}),e.search=n({1:function(n,e,a,r,i){var l;return"              "+n.escapeExpression((l=null!=(l=a.error||(null!=e?e.error:e))?l:a.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:i}):l))+"\n"},3:function(n,e,a,r,i){var l;return null!=(l=a.each.call(null!=e?e:{},null!=e?e.recipes:e,{name:"each",hash:{},fn:n.program(4,i,0),inverse:n.program(6,i,0),data:i}))?l:""},4:function(n,e,a,r,i){var l;return null!=(l=n.invokePartial(r.recipe,e,{name:"recipe",data:i,indent:"                ",helpers:a,partials:r,decorators:n.decorators}))?l:""},6:function(n,e,a,r,i){return"                <p><em>No recipes found. We suggest that you allow additional ingredients in your search.</em></p>\n"},8:function(n,e,a,r,i){var l=n.lambda,s=n.escapeExpression;return'        <li class="ingredient" style="list-style-type:none" data-ingredient-id='+s(l(e,e))+">"+s(l(e,e))+'<button class="delete-button" type="button">Delete</button></li>\n'},10:function(n,e,a,r,i){return"        <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,a,r,i){var l,s,t=null!=e?e:{};return"<p>Welcome, <b>"+n.escapeExpression((s=null!=(s=a.currentUser||(null!=e?e.currentUser:e))?s:a.helperMissing,"function"==typeof s?s.call(t,{name:"currentUser",hash:{},data:i}):s))+'</b> (<a href="#" id="logout-link">logout</a>)</p>\n\n<div class="wrapper">\n    <div class="left">\n        <h1>Find recipes.</h1>\n\n        <form id="search-form">\n<!--           <div>Serving size: <input type="number" name="servingsize"/></div>\n          <div>Additional ingredients: <input type="text" name="additional"/></div> -->\n          <input type="submit" value="Scavenge"/>\n        </form>\n\n          <div class="error">\n'+(null!=(l=a["if"].call(t,null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?l:"")+'          </div>\n\n          <div class="results">\n'+(null!=(l=a["if"].call(t,null!=e?e.searched:e,{name:"if",hash:{},fn:n.program(3,i,0),inverse:n.noop,data:i}))?l:"")+'          </div>\n    </div>\n\n    <div class="right">\n      <h1>Your pantry.</h1>\n\n      <div id="ingredientsList">\n'+(null!=(l=a.each.call(t,null!=e?e.ingredients:e,{name:"each",hash:{},fn:n.program(8,i,0),inverse:n.program(10,i,0),data:i}))?l:"")+'      </div>\n\n      <form id="pantry-form">\n        <div>Add a new ingredient: <input type="text" id="new-ingredient" name="ingredient" required />\n        <input type="submit" value="Add"/></div>\n      </form>\n  </div>\n'},usePartial:!0,useData:!0})}();
