!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.anonHeader=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="" id="register-btn">SIGN UP</a></li>\n           <li class="active"><a href="" id="signin-btn" >LOGIN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  '},useData:!0}),a.cookbook=n({1:function(n,a,e,r,i){var s;return null!=(s=n.invokePartial(r.cookbookRecipe,a,{name:"cookbookRecipe",data:i,indent:"                ",helpers:e,partials:r,decorators:n.decorators}))?s:""},3:function(n,a,e,r,i){return"                <p><em>Your cookbook is currently empty. Save recipes to stash them here!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){var s;return(null!=(s=n.invokePartial(r.header,a,{name:"header",data:i,helpers:e,partials:r,decorators:n.decorators}))?s:"")+'<div class="cookbook">\n'+(null!=(s=e.each.call(null!=a?a:{},null!=a?a.recipes:a,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.program(3,i,0),data:i}))?s:"")+"          </div>"},usePartial:!0,useData:!0}),a.cookbookRecipeView=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){var s,l,t=null!=a?a:{},o=e.helperMissing,d="function",c=n.escapeExpression;return'<div class = "cookbookItem" data-recipid='+c((l=null!=(l=e._id||(null!=a?a._id:a))?l:o,typeof l===d?l.call(t,{name:"_id",hash:{},data:i}):l))+'>\n<div class="cookbookRecipe" data-recipeid='+c((l=null!=(l=e._id||(null!=a?a._id:a))?l:o,typeof l===d?l.call(t,{name:"_id",hash:{},data:i}):l))+">\n  <p>"+c((l=null!=(l=e.name||(null!=a?a.name:a))?l:o,typeof l===d?l.call(t,{name:"name",hash:{},data:i}):l))+"</p>\n  <img src = "+c(n.lambda(null!=(s=null!=a?a.imageURLs:a)?s[1]:s,a))+'>\n  \n  \n  \n</div>\n<button id="recipe-delete-btn" data-id='+c((l=null!=(l=e._id||(null!=a?a._id:a))?l:o,typeof l===d?l.call(t,{name:"_id",hash:{},data:i}):l))+' class="btn btn-lg btn-warning recipe-delete-btn" type="button">Delete</button>\n</div>'},useData:!0}),a.header=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="">PANTRY</a></li>\n          <li class="active"><a href="" id="cookbook-btn">COOKBOOK</a></li>\n<!-- \n          <li><img id="mazzetti" class="navpic" src="img/domm.jpg" alt="Bro Science"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  '},useData:!0}),a.hook=n({1:function(n,a,e,r,i){var s;return"          "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:i}):s))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){var s;return(null!=(s=n.invokePartial(r.anonHeader,a,{name:"anonHeader",data:i,helpers:e,partials:r,decorators:n.decorators}))?s:"")+'\n\n<div class ="container-fluid">\n<div class="row">  \n  <div class="hook-box">\n  \n    <div class="hook-text-line">\n    <span class="hook-text">I am cooking for </span> \n    <input id="hook-number-input" type="number" value="1"/> \n    <span class="hook-text"> and I have </span>\n    <span class="hook-vert-line"> | </span>\n    <input id="hook-ingr-input" type="text" placeholder="corn, pork shoulder, cilantro, etc."/>\n\n    </div>\n      <div class="error">\n'+(null!=(s=e["if"].call(null!=a?a:{},null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?s:"")+'      </div>\n    <form id="hook-search-form">\n        <input type="submit" value="SCAVENGE" class="btn btn-warning"/>\n    </form>\n  </div>\n</div>\n</div>'},usePartial:!0,useData:!0}),a.index=n({1:function(n,a,e,r,i){var s;return"          "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:i}):s))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){var s;return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="" id="register-btn">SIGN UP</a></li>\n<!-- \n          <li><img id="mazzetti" class="navpic" src="img/domm.jpg" alt="Bro Science"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  \n\n\n<div class ="container-fluid">\n<div class="row">  \n  <div class="col-md-4 col-md-offset-4 signin-box" >\n    <h2 class="text-center">Sign in</h2>\n      <div class="error">\n'+(null!=(s=e["if"].call(null!=a?a:{},null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?s:"")+'      </div>\n\n      <form id="signin-form">\n      <div>\n        <label for="inputUsername" class="sr-only"><span>Username</span></label>\n        <input type="username" id="inputUsername" name="username" class="form-control" placeholder="Username" required autofocus/>\n      </div>\n      <div>\n        <label for="inputPassword" class="sr-only"><span>Password</span></label>\n        <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required/>\n      </div>\n        <input type="submit" class="btn btn-lg btn-warning btn-block"/>\n      </form>\n</div>\n</div>\n</div>\n'},useData:!0}),a.ingredient=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){var s,l=n.lambda,t=n.escapeExpression;return'<div class="ingredient">\n  <label>'+t(l(null!=(s=null!=a?a.ingredient:a)?s.name:s,a))+" </label><p>: "+t(l(null!=(s=null!=a?a.ingredient:a)?s.amount:s,a))+" </p>\n</div>"},useData:!0}),a.recipe=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){var s,l,t=null!=a?a:{},o=e.helperMissing,d="function",c=n.escapeExpression;return'<div class="recipe" data-recipeid='+c((l=null!=(l=e._id||(null!=a?a._id:a))?l:o,typeof l===d?l.call(t,{name:"_id",hash:{},data:i}):l))+" data-recipesize="+c((l=null!=(l=e.size||(null!=a?a.size:a))?l:o,typeof l===d?l.call(t,{name:"size",hash:{},data:i}):l))+">\n  <p>"+c((l=null!=(l=e.name||(null!=a?a.name:a))?l:o,typeof l===d?l.call(t,{name:"name",hash:{},data:i}):l))+"</p>\n  <img src = "+c(n.lambda(null!=(s=null!=a?a.imageURLs:a)?s[1]:s,a))+">\n  \n</div>\n\n\n"},useData:!0}),a.recipeView=n({1:function(n,a,e,r,i){return'        <div class="ingredient">'+n.escapeExpression(n.lambda(a,a))+"</div>\n"},3:function(n,a,e,r,i){var s;return'      <button id="save-btn" data-id='+n.escapeExpression(n.lambda(null!=(s=null!=a?a.recipe:a)?s._id:s,a))+' class="btn btn-lg btn-warning save-btn">Save Recipe to Cookbook</button>\n'},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){var s,l=n.lambda,t=n.escapeExpression,o=null!=a?a:{};return(null!=(s=n.invokePartial(r.header,a,{name:"header",data:i,helpers:e,partials:r,decorators:n.decorators}))?s:"")+"<div data-recipeid="+t(l(null!=(s=null!=a?a.recipe:a)?s._id:s,a))+'>\n\n<div class="container-fluid">\n\n<div class="row">\n  <div class="col-md-5 recipe-box">\n    <div class="recipe-view-img" style="background-image: url('+t(l(null!=(s=null!=(s=null!=a?a.recipe:a)?s.imageURLs:s)?s[0]:s,a))+')"></div>\n    <div class="serving-label">Serving size: '+t(l(null!=(s=null!=a?a.recipe:a)?s.servingSize:s,a))+'</div>\n    <div class="recipe-name">'+t(l(null!=(s=null!=a?a.recipe:a)?s.name:s,a))+'</div>\n  </div>\n\n  <div class="col-md-6 col-md-offset-1 recipe-box">\n    <div class="ingredients">\n      <div class="ingredients-header">Ingredients: </div>\n      \n'+(null!=(s=e.each.call(o,null!=(s=null!=a?a.recipe:a)?s.ingredients:s,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?s:"")+'    </div>\n\n    <div class="instructions">\n      <div class="instructions-label">Instructions: </div>\n      <a class="recipe-url" href="'+t(l(null!=(s=null!=a?a.recipe:a)?s.sourceURL:s,a))+'">Full instructions here</a>\n    </div>\n'+(null!=(s=e["if"].call(o,null!=a?a.displayButton:a,{name:"if",hash:{},fn:n.program(3,i,0),inverse:n.noop,data:i}))?s:"")+"\n\n  </div>\n</div>\n\n</div>\n</div>"},usePartial:!0,useData:!0}),a.register=n({1:function(n,a,e,r,i){var s;return"      "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:i}):s))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i){var s;return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="" id="signin-btn" >LOGIN</a></li>\n<!-- \n          <li><img id="mazzetti" class="navpic" src="img/domm.jpg" alt="Bro Science"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n\n\n\n<div class ="container-fluid">\n<div class="row">  \n  <div class="col-md-4 col-md-offset-4 signin-box" >\n  \n\n  <h2 class="text-center">Register</h2>\n  <div class="error">\n'+(null!=(s=e["if"].call(null!=a?a:{},null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?s:"")+'  </div>\n<!--   <form id="register-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <div>Confirm Password: <input type="password" name="confirm" required /></div>\n    <input type="submit" />\n  </form> -->\n\n\n  <form id="register-form">\n  <div>\n    <label for="inputUsername" class="sr-only"><span>Username</span></label>\n    <input type="username" id="inputUsername" name="username" class="form-control" placeholder="Username" required autofocus/>\n  </div>\n  <div>\n    <label for="inputPassword" class="sr-only"><span>Password</span></label>\n    <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required/>\n  </div>\n  <div>\n    <label for="inputPasswordConfirm" class="sr-only"><span>Confirm Password</span></label>\n    <input type="password" id="inputPasswordConfirm" name="confirm" class="form-control" placeholder="Confirm Password" required/>\n  </div>\n    <input type="submit" class="btn btn-lg btn-warning btn-block"/>\n  </form>\n</div>\n</div>\n</div>'},useData:!0}),a.search=n({1:function(n,a,e,r,i){var s;return"              "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:i}):s))+"\n"},3:function(n,a,e,r,i,s,l){var t;return null!=(t=e.each.call(null!=a?a:{},null!=a?a.recipes:a,{name:"each",hash:{},fn:n.program(4,i,0,s,l),inverse:n.program(6,i,0,s,l),data:i}))?t:""},4:function(n,a,e,r,i,s,l){var t;return null!=(t=n.invokePartial(r.recipe,a,{name:"recipe",hash:{size:null!=l[1]?l[1].size:l[1]},data:i,indent:"                ",helpers:e,partials:r,decorators:n.decorators}))?t:""},6:function(n,a,e,r,i){return"                <p><em>No recipes found. We suggest that you allow additional ingredients in your search.</em></p>\n"},8:function(n,a,e,r,i){var s=n.lambda,l=n.escapeExpression;return'\n          <div class="ingredients-line">\n          <span class="delete-button" style="color:orange;">x</span><span class="ingredient" data-ingredient-id='+l(s(null!=a?a._id:a,a))+">"+l(s(null!=a?a.name:a,a))+"</span>\n\n         </div>\n"},10:function(n,a,e,r,i){return"          <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i,s,l){var t,o,d=null!=a?a:{};return(null!=(t=n.invokePartial(r.header,a,{name:"header",data:i,helpers:e,partials:r,decorators:n.decorators}))?t:"")+'\n<div class="welcome">Welcome, <b>'+n.escapeExpression((o=null!=(o=e.currentUser||(null!=a?a.currentUser:a))?o:e.helperMissing,"function"==typeof o?o.call(d,{name:"currentUser",hash:{},data:i}):o))+'</b> (<a href="#" id="logout-link">logout</a>)</div>\n\n<div class="container">\n<div class="row">\n    <div class="col-md-5 left">\n        <h1>Find recipes.</h1>\n\n        <form id="search-form">\n           <div>Serving size: <input id="serv-size-input" type="number" name="servingsize"/></div>\n          <input type="submit" value="Scavenge" class="btn btn-warning"/>\n        </form>\n\n          <div class="error">\n'+(null!=(t=e["if"].call(d,null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0,s,l),inverse:n.noop,data:i}))?t:"")+'          </div>\n\n          <div class="results">\n'+(null!=(t=e["if"].call(d,null!=a?a.searched:a,{name:"if",hash:{},fn:n.program(3,i,0,s,l),inverse:n.noop,data:i}))?t:"")+'          </div>\n    </div>\n\n    <div class="col-md-5 col-md-offset-1 right">\n      <h1>Your pantry.</h1>\n\n      <div id="ingredientsList">\n'+(null!=(t=e.each.call(d,null!=a?a.ingredients:a,{name:"each",hash:{},fn:n.program(8,i,0,s,l),inverse:n.program(10,i,0,s,l),data:i}))?t:"")+'      </div>\n\n      <form id="pantry-form">\n        <div>Add a new ingredient: <input class="form-control" id="new-ingredient" name="ingredient" required />\n        <input type="submit" value="Add" class="btn btn-warning"/></div>\n      </form>\n  </div>\n  </div>\n'},usePartial:!0,useData:!0,useDepths:!0}),a.searchAnon=n({1:function(n,a,e,r,i){var s;return"              "+n.escapeExpression((s=null!=(s=e.error||(null!=a?a.error:a))?s:e.helperMissing,"function"==typeof s?s.call(null!=a?a:{},{name:"error",hash:{},data:i}):s))+"\n"},3:function(n,a,e,r,i,s,l){var t;return null!=(t=e.each.call(null!=a?a:{},null!=a?a.recipes:a,{name:"each",hash:{},fn:n.program(4,i,0,s,l),inverse:n.program(6,i,0,s,l),data:i}))?t:""},4:function(n,a,e,r,i,s,l){var t;return null!=(t=n.invokePartial(r.recipe,a,{name:"recipe",hash:{size:null!=l[1]?l[1].size:l[1]},data:i,indent:"                ",helpers:e,partials:r,decorators:n.decorators}))?t:""},6:function(n,a,e,r,i){return"                <p><em>No recipes found. We suggest that you allow additional ingredients in your search.</em></p>\n"},8:function(n,a,e,r,i){var s=n.lambda,l=n.escapeExpression;return'\n          <div class="ingredients-line">\n          <span class="anon-delete-button" style="color:orange;">x</span><span class="ingredient" data-ingredient-id='+l(s(a,a))+">"+l(s(a,a))+"</span>\n\n         </div>\n"},10:function(n,a,e,r,i){return"          <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,r,i,s,l){var t,o,d=null!=a?a:{},c=e.helperMissing,p="function",u=n.escapeExpression;return(null!=(t=n.invokePartial(r.anonHeader,a,{name:"anonHeader",data:i,helpers:e,partials:r,decorators:n.decorators}))?t:"")+'\n<div class="container" data-ingredientsList-id="'+u((o=null!=(o=e.ingredients||(null!=a?a.ingredients:a))?o:c,typeof o===p?o.call(d,{name:"ingredients",hash:{},data:i}):o))+'" data-recipesList-id="'+u((o=null!=(o=e.recipes||(null!=a?a.recipes:a))?o:c,typeof o===p?o.call(d,{name:"recipes",hash:{},data:i}):o))+'">\n<div class="row">\n    <div class="col-md-5 left">\n        <h1>Find recipes.</h1>\n\n        <form id="anon-search-form">\n           <div>Serving size: <input type="number" name="servingsize"/></div>\n          <div>Additional ingredients: <input type="text" name="additional"/></div>\n          <input type="submit" value="Scavenge" class="btn btn-warning"/>\n        </form>\n\n          <div class="error">\n'+(null!=(t=e["if"].call(d,null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0,s,l),inverse:n.noop,data:i}))?t:"")+'          </div>\n\n          <div class="results">\n'+(null!=(t=e["if"].call(d,null!=a?a.searched:a,{name:"if",hash:{},fn:n.program(3,i,0,s,l),inverse:n.noop,data:i}))?t:"")+'          </div>\n    </div>\n\n    <div class="col-md-5 col-md-offset-1 right">\n      <h1>Your pantry.</h1>\n\n      <div id="ingredientsList">\n'+(null!=(t=e.each.call(d,null!=a?a.ingredients:a,{name:"each",hash:{},fn:n.program(8,i,0,s,l),inverse:n.program(10,i,0,s,l),data:i}))?t:"")+'      </div>\n\n      <form id="anon-pantry-form">\n        <div>Add a new ingredient: <input class="form-control" id="new-ingredient" name="ingredient" required />\n        <input type="submit" value="Add" class="btn btn-warning"/></div>\n      </form>\n  </div>\n  </div>\n'},usePartial:!0,useData:!0,useDepths:!0})}();
