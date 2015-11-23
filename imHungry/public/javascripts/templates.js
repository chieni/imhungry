!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.index=n({1:function(n,e,r,i,a){var l;return"      "+n.escapeExpression((l=null!=(l=r.error||(null!=e?e.error:e))?l:r.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:a}):l))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l;return'<div id="homepage">\n  <h1>ImHungry</h1>\n  <div id="signin">\n  <h1>Sign in</h1>\n  <div class="error">\n'+(null!=(l=r["if"].call(null!=e?e:{},null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a}))?l:"")+'  </div>\n  <form id="signin-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <input type="submit" />\n  </form>\n</div>\n<p>Or register if you are a new user:</p>\n  <button id="register-btn">Register</button>\n</div>'},useData:!0}),e.ingredient=n({compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l,t=n.lambda,s=n.escapeExpression;return'<div class="ingredient">\n  <label>'+s(t(null!=(l=null!=e?e.ingredient:e)?l.name:l,e))+" </label><p>: "+s(t(null!=(l=null!=e?e.ingredient:e)?l.amount:l,e))+" </p>\n</div>"},useData:!0}),e.recipe=n({1:function(n,e,r,i,a){return"      <li>"+n.escapeExpression(n.lambda(e,e))+"</li>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l,t,s=n.escapeExpression,u=null!=e?e:{},o=r.helperMissing,d="function";return'\n<div class="recipe" data-recipeid='+s(n.lambda(null!=(l=null!=e?e.recipe:e)?l._id:l,e))+">\n  <p>"+s((t=null!=(t=r.name||(null!=e?e.name:e))?t:o,typeof t===d?t.call(u,{name:"name",hash:{},data:a}):t))+'</p>\n\n  <label>Ingredients: </label>\n  <ul class="ingredients">\n'+(null!=(l=r.each.call(u,null!=e?e.ingredients:e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a}))?l:"")+"  </ul>\n\n  <label>Serving size: </label><p> "+s((t=null!=(t=r.servingSize||(null!=e?e.servingSize:e))?t:o,typeof t===d?t.call(u,{name:"servingSize",hash:{},data:a}):t))+"</p>\n\n  <label>Instructions: </label>\n  <p>"+s((t=null!=(t=r.sourceURL||(null!=e?e.sourceURL:e))?t:o,typeof t===d?t.call(u,{name:"sourceURL",hash:{},data:a}):t))+"</p>\n</div>\n\n\n"},useData:!0}),e.register=n({1:function(n,e,r,i,a){var l;return"      "+n.escapeExpression((l=null!=(l=r.error||(null!=e?e.error:e))?l:r.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:a}):l))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l;return'<div id="register">\n  <a href="#" id="home-link">Back to Home</a>\n  <h1>Register</h1>\n  <div class="error">\n'+(null!=(l=r["if"].call(null!=e?e:{},null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a}))?l:"")+'  </div>\n  <form id="register-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <div>Confirm Password: <input type="password" name="confirm" required /></div>\n    <input type="submit" />\n  </form>\n</div>'},useData:!0}),e.search=n({1:function(n,e,r,i,a){var l;return"              "+n.escapeExpression((l=null!=(l=r.error||(null!=e?e.error:e))?l:r.helperMissing,"function"==typeof l?l.call(null!=e?e:{},{name:"error",hash:{},data:a}):l))+"\n"},3:function(n,e,r,i,a){var l;return null!=(l=r.each.call(null!=e?e:{},null!=e?e.recipes:e,{name:"each",hash:{},fn:n.program(4,a,0),inverse:n.program(6,a,0),data:a}))?l:""},4:function(n,e,r,i,a){var l;return null!=(l=n.invokePartial(i.recipe,e,{name:"recipe",data:a,indent:"                ",helpers:r,partials:i,decorators:n.decorators}))?l:""},6:function(n,e,r,i,a){return"                <p><em>No recipes found. We suggest that you allow additional ingredients in your search.</em></p>\n"},8:function(n,e,r,i,a){var l=n.lambda,t=n.escapeExpression;return'        <li class="ingredient" style="list-style-type:none" data-ingredient-id='+t(l(e,e))+">"+t(l(e,e))+'<button class="delete-button" type="button">Delete</button></li>\n'},10:function(n,e,r,i,a){return"        <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,e,r,i,a){var l,t,s=null!=e?e:{};return"<p>Welcome, <b>"+n.escapeExpression((t=null!=(t=r.currentUser||(null!=e?e.currentUser:e))?t:r.helperMissing,"function"==typeof t?t.call(s,{name:"currentUser",hash:{},data:a}):t))+'</b> (<a href="#" id="logout-link">logout</a>)</p>\n\n<div class="wrapper">\n    <div class="left">\n        <h1>Find recipes.</h1>\n\n        <form id="search-form">\n          <div>Serving size: <input type="number" name="servingsize"/></div>\n          <div>Additional ingredients: <input type="text" name="additional"/></div>\n          <input type="submit" value="Scavenge"/>\n        </form>\n\n          <div class="error">\n'+(null!=(l=r["if"].call(s,null!=e?e.error:e,{name:"if",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a}))?l:"")+'          </div>\n\n          <div class="results">\n'+(null!=(l=r["if"].call(s,null!=e?e.searched:e,{name:"if",hash:{},fn:n.program(3,a,0),inverse:n.noop,data:a}))?l:"")+'          </div>\n    </div>\n\n    <div class="right">\n      <h1>Your pantry.</h1>\n\n      <div id="ingredientsList">\n'+(null!=(l=r.each.call(s,null!=e?e.ingredients:e,{name:"each",hash:{},fn:n.program(8,a,0),inverse:n.program(10,a,0),data:a}))?l:"")+'      </div>\n\n      <form id="pantry-form">\n        <div>Add a new ingredient: <input type="text" id="new-ingredient" name="ingredient" required />\n        <input type="submit" value="Add"/></div>\n      </form>\n  </div>\n'},usePartial:!0,useData:!0})}();
