!function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n.recipe=e({1:function(e,n,l,a,t){var r,i=e.lambda,u=e.escapeExpression;return"  	<label>"+u(i(null!=(r=null!=n?n.tweet:n)?r.retweeter:r,n))+" </label><p> retweeted </p><label> "+u(i(null!=(r=null!=n?n.tweet:n)?r.author:r,n))+"</label><p> : "+u(i(null!=(r=null!=n?n.tweet:n)?r.content:r,n))+"</p>\n"},3:function(e,n,l,a,t){var r,i=e.lambda,u=e.escapeExpression;return"  	<label>"+u(i(null!=(r=null!=n?n.tweet:n)?r.author:r,n))+" </label><p> tweeted: "+u(i(null!=(r=null!=n?n.tweet:n)?r.content:r,n))+"</p>\n"},5:function(e,n,l,a,t){return'  	<a href="#" class="delete-tweet">Delete</a>\n'},7:function(e,n,l,a,t){var r;return null!=(r=l["if"].call(null!=n?n:{},null!=n?n.isNotRetweeter:n,{name:"if",hash:{},fn:e.program(8,t,0),inverse:e.noop,data:t}))?r:""},8:function(e,n,l,a,t){return'  		<a href="#" class="retweet-tweet">Retweet</a>\n'},compiler:[7,">= 4.0.0"],main:function(e,n,l,a,t){var r,i=e.lambda,u=null!=n?n:{};return'\n<div class="recipe" data-recipename='+(null!=(r=i(null!=(r=null!=n?n.recipe:n)?r.name:r,n))?r:"")+">\n  <label>"+(null!=(r=i(null!=(r=null!=n?n.recipe:n)?r.name:r,n))?r:"")+"</label>\n"+(null!=(r=l["if"].call(u,null!=n?n.isRetweet:n,{name:"if",hash:{},fn:e.program(1,t,0),inverse:e.program(3,t,0),data:t}))?r:"")+(null!=(r=l["if"].call(u,null!=n?n.isAuthor:n,{name:"if",hash:{},fn:e.program(5,t,0),inverse:e.program(7,t,0),data:t}))?r:"")+"</div>\n\n\n"},useData:!0}),n.search=e({compiler:[7,">= 4.0.0"],main:function(e,n,l,a,t){return'<div id="search">\n  <h1>Find recipes:</h1>\n  <form id="search-form">\n    <div>Serving size: <input type="number" name="size" /></div>\n    <div>Additional ingredients: <input type="text" name="addIngredients" /></div>\n    <input type="submit" value="Scavenge"/>\n  </form>\n</div>'},useData:!0})}();
