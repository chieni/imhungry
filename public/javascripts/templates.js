!function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.anonHeader=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="" id="register-btn">SIGN UP</a></li>\n           <li class="active"><a href="" id="signin-btn" >LOGIN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  '},useData:!0}),a.cookbook=n({1:function(n,a,e,l,i){var r;return null!=(r=n.invokePartial(l.cookbookRecipe,a,{name:"cookbookRecipe",data:i,indent:"                ",helpers:e,partials:l,decorators:n.decorators}))?r:""},3:function(n,a,e,l,i){return"                <p><em>Your cookbook is currently empty. Save recipes to stash them here!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){var r;return'<div id="cookbook-view">\n'+(null!=(r=n.invokePartial(l.header,a,{name:"header",data:i,helpers:e,partials:l,decorators:n.decorators}))?r:"")+'<div class="cookbook">\n	<div class="container">\n	<div class="search-row">\n	<div class="col-md-12 cookbook-box">\n'+(null!=(r=e.each.call(null!=a?a:{},null!=a?a.recipes:a,{name:"each",hash:{},fn:n.program(1,i,0),inverse:n.program(3,i,0),data:i}))?r:"")+"          </div>\n    </div>\n    </div>\n    </div>\n</div>"},usePartial:!0,useData:!0}),a.cookbookRecipeView=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){var r,s,o=null!=a?a:{},t=e.helperMissing,d="function",c=n.escapeExpression,p=n.lambda;return'<div class = "cookbookItem" data-recipid='+c((s=null!=(s=e._id||(null!=a?a._id:a))?s:t,typeof s===d?s.call(o,{name:"_id",hash:{},data:i}):s))+'>\n\n	<div class="cookbookRecipe recipe-overlay" data-recipeid='+c((s=null!=(s=e._id||(null!=a?a._id:a))?s:t,typeof s===d?s.call(o,{name:"_id",hash:{},data:i}):s))+">\n	  <p>"+c((s=null!=(s=e.name||(null!=a?a.name:a))?s:t,typeof s===d?s.call(o,{name:"name",hash:{},data:i}):s))+'</p>\n	  <img class="recipe-image" src = '+c(p(null!=(r=null!=a?a.imageURLs:a)?r[1]:r,a))+'>\n	</div>\n	<button id="recipe-delete-btn" data-id='+c((s=null!=(s=e._id||(null!=a?a._id:a))?s:t,typeof s===d?s.call(o,{name:"_id",hash:{},data:i}):s))+' class="btn btn-lg btn-warning recipe-delete-btn" type="button">Delete</button>\n</div>\n\n\n<!-- \n<div class="recipe recipe-overlay" data-recipeid='+c((s=null!=(s=e._id||(null!=a?a._id:a))?s:t,typeof s===d?s.call(o,{name:"_id",hash:{},data:i}):s))+" data-recipesize="+c((s=null!=(s=e.size||(null!=a?a.size:a))?s:t,typeof s===d?s.call(o,{name:"size",hash:{},data:i}):s))+">\n  <p>"+c((s=null!=(s=e.name||(null!=a?a.name:a))?s:t,typeof s===d?s.call(o,{name:"name",hash:{},data:i}):s))+'</p>\n  <img class="recipe-image" src = '+c(p(null!=(r=null!=a?a.imageURLs:a)?r[1]:r,a))+">\n</div> -->"},useData:!0}),a.header=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="">PANTRY</a></li>\n          <li class="active"><a href="" id="cookbook-btn">COOKBOOK</a></li>\n          <li class="active"><a href="#" id="logout-link">LOGOUT</a></li>\n<!-- \n          <li><img id="mazzetti" class="navpic" src="img/domm.jpg" alt="Bro Science"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  '},useData:!0}),a.hook=n({1:function(n,a,e,l,i){var r;return"          "+n.escapeExpression((r=null!=(r=e.error||(null!=a?a.error:a))?r:e.helperMissing,"function"==typeof r?r.call(null!=a?a:{},{name:"error",hash:{},data:i}):r))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){var r;return(null!=(r=n.invokePartial(l.anonHeader,a,{name:"anonHeader",data:i,helpers:e,partials:l,decorators:n.decorators}))?r:"")+'\n\n<div class ="container-fluid">\n<div class="row">  \n  <div class="hook-box">\n  \n    <div class="hook-text-line">\n    <span class="hook-text">I am cooking for </span> \n    <input id="hook-number-input" type="number" value="1"/> \n    <span class="hook-text"> and I have </span>\n    <span class="hook-vert-line"> | </span>\n    <input id="hook-ingr-input" type="text" placeholder="corn, pork shoulder, cilantro, etc."/>\n\n    </div>\n      <div class="error">\n'+(null!=(r=e["if"].call(null!=a?a:{},null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?r:"")+'      </div>\n    <form id="hook-search-form">\n        <input type="submit" value="SCAVENGE" class="btn btn-warning"/>\n    </form>\n  </div>\n</div>\n</div>'},usePartial:!0,useData:!0}),a.index=n({1:function(n,a,e,l,i){var r;return"          "+n.escapeExpression((r=null!=(r=e.error||(null!=a?a.error:a))?r:e.helperMissing,"function"==typeof r?r.call(null!=a?a:{},{name:"error",hash:{},data:i}):r))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){var r;return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="" id="register-btn">SIGN UP</a></li>\n<!-- \n          <li><img id="mazzetti" class="navpic" src="img/domm.jpg" alt="Bro Science"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  \n\n\n<div class ="container-fluid">\n<div class="row">  \n  <div class="col-md-4 col-md-offset-4 signin-box" >\n    <h2 class="text-center">Sign in</h2>\n      <div class="error">\n'+(null!=(r=e["if"].call(null!=a?a:{},null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?r:"")+'      </div>\n\n      <form id="signin-form">\n      <div>\n        <label for="inputUsername" class="sr-only"><span>Username</span></label>\n        <input type="username" id="inputUsername" name="username" class="form-control" placeholder="Username" required autofocus/>\n      </div>\n      <div>\n        <label for="inputPassword" class="sr-only"><span>Password</span></label>\n        <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required/>\n      </div>\n        <input type="submit" class="btn btn-lg btn-warning btn-block"/>\n      </form>\n</div>\n</div>\n</div>\n'},useData:!0}),a.ingredient=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){var r,s=n.lambda,o=n.escapeExpression;return'<div class="ingredient">\n  <label>'+o(s(null!=(r=null!=a?a.ingredient:a)?r.name:r,a))+" </label><p>: "+o(s(null!=(r=null!=a?a.ingredient:a)?r.amount:r,a))+" </p>\n</div>"},useData:!0}),a.recipe=n({compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){var r,s,o=null!=a?a:{},t=e.helperMissing,d="function",c=n.escapeExpression;return'<div class="recipe recipe-overlay" data-recipeid='+c((s=null!=(s=e._id||(null!=a?a._id:a))?s:t,typeof s===d?s.call(o,{name:"_id",hash:{},data:i}):s))+" data-recipesize="+c((s=null!=(s=e.size||(null!=a?a.size:a))?s:t,typeof s===d?s.call(o,{name:"size",hash:{},data:i}):s))+">\n  <p>"+c((s=null!=(s=e.name||(null!=a?a.name:a))?s:t,typeof s===d?s.call(o,{name:"name",hash:{},data:i}):s))+'</p>\n  <img class="recipe-image" src = '+c(n.lambda(null!=(r=null!=a?a.imageURLs:a)?r[1]:r,a))+">\n</div>\n\n\n"},useData:!0}),a.recipeView=n({1:function(n,a,e,l,i){var r;return null!=(r=n.invokePartial(l.header,a,{name:"header",data:i,helpers:e,partials:l,decorators:n.decorators}))?r:""},3:function(n,a,e,l,i){var r;return null!=(r=n.invokePartial(l.anonHeader,a,{name:"anonHeader",data:i,helpers:e,partials:l,decorators:n.decorators}))?r:""},5:function(n,a,e,l,i){return'        <div class="ingredient">'+n.escapeExpression(n.lambda(a,a))+"</div>\n"},7:function(n,a,e,l,i){var r,s=n.lambda,o=n.escapeExpression;return'      <button id="save-btn" data-id='+o(s(null!=(r=null!=a?a.recipe:a)?r._id:r,a))+" data-servingsize="+o(s(null!=(r=null!=a?a.recipe:a)?r.servingSize:r,a))+' class="btn btn-lg btn-warning save-btn">Save Recipe to Cookbook</button>\n'},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){var r,s=null!=a?a:{},o=n.lambda,t=n.escapeExpression;return(null!=(r=e["if"].call(s,null!=a?a.currentUser:a,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.program(3,i,0),data:i}))?r:"")+"<div data-recipeid="+t(o(null!=(r=null!=a?a.recipe:a)?r._id:r,a))+'>\n\n<div class="container">\n\n<div class="search-row recipe-box">\n\n\n  <div class="col-md-4">\n    <div class="recipe-view-img" style="background-image: url('+t(o(null!=(r=null!=(r=null!=a?a.recipe:a)?r.imageURLs:r)?r[0]:r,a))+')"></div>\n    <div class="serving-label">Serving size: '+t(o(null!=(r=null!=a?a.recipe:a)?r.servingSize:r,a))+'</div>\n    <div class="recipe-name">'+t(o(null!=(r=null!=a?a.recipe:a)?r.name:r,a))+'</div>\n  </div>\n\n\n\n  <div class="col-md-6 col-md-offset-1">\n    <div class="ingredients">\n      <div class="ingredients-header"><font size="40">Ingredients: </font></div>\n      \n'+(null!=(r=e.each.call(s,null!=(r=null!=a?a.recipe:a)?r.ingredients:r,{name:"each",hash:{},fn:n.program(5,i,0),inverse:n.noop,data:i}))?r:"")+'    </div>\n\n    <div class="instructions">\n      <div class="instructions-label"><font size="20">Instructions: </font></div>\n      <a class="recipe-url" href="'+t(o(null!=(r=null!=a?a.recipe:a)?r.sourceURL:r,a))+'">Full instructions here</a>\n    </div>\n'+(null!=(r=e["if"].call(s,null!=a?a.displayButton:a,{name:"if",hash:{},fn:n.program(7,i,0),inverse:n.noop,data:i}))?r:"")+"  </div>\n\n\n\n\n\n</div>\n\n</div>\n</div>"},usePartial:!0,useData:!0}),a.register=n({1:function(n,a,e,l,i){var r;return"      "+n.escapeExpression((r=null!=(r=e.error||(null!=a?a.error:a))?r:e.helperMissing,"function"==typeof r?r.call(null!=a?a:{},{name:"error",hash:{},data:i}):r))+"\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i){var r;return'<nav class="navbar navbar-static-top">\n    <div class="container-fluid ">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href=""><div class="header-logo"></div></a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n        <ul class="nav navbar-nav navbar-right">\n          <li class="active"><a href="" id="signin-btn" >LOGIN</a></li>\n<!-- \n          <li><img id="mazzetti" class="navpic" src="img/domm.jpg" alt="Bro Science"></li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n  \n\n\n\n<div class ="container-fluid">\n<div class="row">  \n  <div class="col-md-4 col-md-offset-4 signin-box" >\n  \n\n  <h2 class="text-center">Register</h2>\n  <div class="error">\n'+(null!=(r=e["if"].call(null!=a?a:{},null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.noop,data:i}))?r:"")+'  </div>\n<!--   <form id="register-form">\n    <div>Username: <input type="text" name="username" required /></div>\n    <div>Password: <input type="password" name="password" required /></div>\n    <div>Confirm Password: <input type="password" name="confirm" required /></div>\n    <input type="submit" />\n  </form> -->\n\n\n  <form id="register-form">\n  <div>\n    <label for="inputUsername" class="sr-only"><span>Username</span></label>\n    <input type="username" id="inputUsername" name="username" class="form-control" placeholder="Username" required autofocus/>\n  </div>\n  <div>\n    <label for="inputPassword" class="sr-only"><span>Password</span></label>\n    <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" required/>\n  </div>\n  <div>\n    <label for="inputPasswordConfirm" class="sr-only"><span>Confirm Password</span></label>\n    <input type="password" id="inputPasswordConfirm" name="confirm" class="form-control" placeholder="Confirm Password" required/>\n  </div>\n    <input type="submit" class="btn btn-lg btn-warning btn-block"/>\n  </form>\n</div>\n</div>\n</div>'},useData:!0}),a.search=n({1:function(n,a,e,l,i){var r;return"      "+n.escapeExpression((r=null!=(r=e.error||(null!=a?a.error:a))?r:e.helperMissing,"function"==typeof r?r.call(null!=a?a:{},{name:"error",hash:{},data:i}):r))+"\n"},3:function(n,a,e,l,i){return'         <div class="spinner"></div>\n'},5:function(n,a,e,l,i,r,s){var o;return null!=(o=e.each.call(null!=a?a:{},null!=a?a.recipes:a,{name:"each",hash:{},fn:n.program(6,i,0,r,s),inverse:n.program(8,i,0,r,s),data:i}))?o:""},6:function(n,a,e,l,i,r,s){var o;return null!=(o=n.invokePartial(l.recipe,a,{name:"recipe",hash:{size:null!=s[1]?s[1].size:s[1]},data:i,indent:"      ",helpers:e,partials:l,decorators:n.decorators}))?o:""},8:function(n,a,e,l,i){return"      <p><em>No recipes found.</em></p>\n"},10:function(n,a,e,l,i){var r=n.lambda,s=n.escapeExpression;return'      <div class="ingredients-line">\n        <span class="delete-button" style="color:orange;">x</span><span class="ingredient" data-ingredient-id='+s(r(null!=a?a._id:a,a))+">"+s(r(null!=a?a.name:a,a))+"</span>\n      </div>\n"},12:function(n,a,e,l,i){return"      <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i,r,s){var o,t,d=null!=a?a:{};return'\n<div id="search-view">\n'+(null!=(o=n.invokePartial(l.header,a,{name:"header",data:i,helpers:e,partials:l,decorators:n.decorators}))?o:"")+'\n<div class="container">\n  <div class="search-row">\n  \n    <div class="col-md-8 left">\n      <h1>Find recipes.</h1>\n\n      <form id="search-form" class="form-inline">\n       <div class="serving-line">Serving size: <input class="form-control" id="serv-size-input" type="number" name="servingsize"/>\n       <input type="submit" value="SCAVENGE" class="btn btn-warning"/></div>\n     </form>\n\n     <div class="error">\n'+(null!=(o=e["if"].call(d,null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0,r,s),inverse:n.noop,data:i}))?o:"")+'    </div>\n\n    <div class="results">\n'+(null!=(o=e["if"].call(d,null!=a?a.loading:a,{name:"if",hash:{},fn:n.program(3,i,0,r,s),inverse:n.noop,data:i}))?o:"")+"\n"+(null!=(o=e["if"].call(d,null!=a?a.searched:a,{name:"if",hash:{},fn:n.program(5,i,0,r,s),inverse:n.noop,data:i}))?o:"")+'    </div>\n  </div>\n\n  <div class="col-md-3 col-md-offset-1 right">\n    <h1>'+n.escapeExpression((t=null!=(t=e.currentUser||(null!=a?a.currentUser:a))?t:e.helperMissing,"function"==typeof t?t.call(d,{name:"currentUser",hash:{},data:i}):t))+'\'s pantry.</h1>\n    <div id="ingredientsList">\n'+(null!=(o=e.each.call(d,null!=a?a.ingredients:a,{name:"each",hash:{},fn:n.program(10,i,0,r,s),inverse:n.program(12,i,0,r,s),data:i}))?o:"")+'    </div>\n\n    <form id="pantry-form" class="form-inline">\n      <div><input class="form-control" id="new-ingredient" name="ingredient" type="text" autocomplete="off" placeholder="Add a new ingredient" required /><input type="submit" value="ADD" class="btn btn-warning" id="add-ing-btn"/></div>\n           <div><ul id="results-list" style="list-style-type:none"></ul></div>\n      </form>\n    </div>\n  </div>\n</div>\n'},usePartial:!0,useData:!0,useDepths:!0}),a.searchAnon=n({1:function(n,a,e,l,i){var r;return"              "+n.escapeExpression((r=null!=(r=e.error||(null!=a?a.error:a))?r:e.helperMissing,"function"==typeof r?r.call(null!=a?a:{},{name:"error",hash:{},data:i}):r))+"\n"},3:function(n,a,e,l,i,r,s){var o;return null!=(o=e.each.call(null!=a?a:{},null!=a?a.recipes:a,{name:"each",hash:{},fn:n.program(4,i,0,r,s),inverse:n.program(6,i,0,r,s),data:i}))?o:""},4:function(n,a,e,l,i,r,s){var o;return null!=(o=n.invokePartial(l.recipe,a,{name:"recipe",hash:{size:null!=s[1]?s[1].size:s[1]},data:i,indent:"                ",helpers:e,partials:l,decorators:n.decorators}))?o:""},6:function(n,a,e,l,i){return"                <p><em>No recipes found.</em></p>\n"},8:function(n,a,e,l,i){var r=n.lambda,s=n.escapeExpression;return'\n          <div class="ingredients-line">\n          <span class="anon-delete-button" style="color:orange;">x</span><span class="ingredient" data-ingredient-id='+s(r(a,a))+">"+s(r(a,a))+"</span>\n\n         </div>\n"},10:function(n,a,e,l,i){return"          <p><em>No ingredients yet!</em></p>\n"},compiler:[7,">= 4.0.0"],main:function(n,a,e,l,i,r,s){var o,t,d=null!=a?a:{},c=e.helperMissing,p="function",u=n.escapeExpression;return(null!=(o=n.invokePartial(l.anonHeader,a,{name:"anonHeader",data:i,helpers:e,partials:l,decorators:n.decorators}))?o:"")+'\n<div class="container" data-ingredientsList-id="'+u((t=null!=(t=e.ingredients||(null!=a?a.ingredients:a))?t:c,typeof t===p?t.call(d,{name:"ingredients",hash:{},data:i}):t))+'" data-recipesList-id="'+u((t=null!=(t=e.recipes||(null!=a?a.recipes:a))?t:c,typeof t===p?t.call(d,{name:"recipes",hash:{},data:i}):t))+'">\n<div class="row">\n    <div class="col-md-5 left">\n        <h1>Find recipes.</h1>\n\n        <form id="anon-search-form" class="form-inline">\n           <div><input type="number" name="servingsize" class="form-control" placeholder="Serving size"/>\n          <input type="submit" value="Scavenge" class="btn btn-warning"/></div>\n\n        </form>\n\n          <div class="error">\n'+(null!=(o=e["if"].call(d,null!=a?a.error:a,{name:"if",hash:{},fn:n.program(1,i,0,r,s),inverse:n.noop,data:i}))?o:"")+'          </div>\n\n          <div class="results">\n'+(null!=(o=e["if"].call(d,null!=a?a.searched:a,{name:"if",hash:{},fn:n.program(3,i,0,r,s),inverse:n.noop,data:i}))?o:"")+'          </div>\n    </div>\n\n    <div class="col-md-5 col-md-offset-1 right">\n      <h1>Your pantry.</h1>\n\n      <div id="ingredientsList">\n'+(null!=(o=e.each.call(d,null!=a?a.ingredients:a,{name:"each",hash:{},fn:n.program(8,i,0,r,s),inverse:n.program(10,i,0,r,s),data:i}))?o:"")+'      </div>\n\n      <form id="anon-pantry-form" class="form-inline">\n        <div><input class="form-control" id="new-ingredient" name="ingredient" autocomplete="off" placeholder="Add a new ingredient" required />\n        <input type="submit" value="Add" class="btn btn-warning"/></div>\n        <div><ul id="results-list" style="list-style-type:none"></ul></div>\n      </form>\n  </div>\n  </div>\n'},usePartial:!0,useData:!0,useDepths:!0})}();
