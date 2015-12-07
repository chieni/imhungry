chieni_nlucas_zlily_mmgong_final
================================
1. URL: im-hungry.herokuapp.com

2. Instructions for local deployment:
	a. in terminal window, run mongo
		use command: mongod
	b. in another terminal window run: npm install
			    		   npm start
	c. in browser, navigate to localhost:3000

3. Features
	-Hook
		- When a User first navigates to our app, they are presented with a Hook page
		- This Hook provides limited functionality to a User that has never used ImHungry before and does not havea  user account
		- User can initially search for recipes by typing in a serving size and some ingredients they have
		- User can also maintain an anonymous pantry that will not persist (as they have no account) but is editable within the session
		- User has access to a limited search (there is no "Load More Recipes" functionality)
		- User is able to view the recipe but is unable to save the recipe or scale the serving size in recipe view or rate the recipe
		- From the Hook search page, the User may create an account if they like the functionality they've been presented with
			- If the User has ingredients in their anonymous pantry, these automatically get transferred over to their pantry once they create an account
	-Account Creation
		- User can create an account with a unique username, a password, and their own pantry (if done from the hook pantry page)
	-Pantry
	  	- User can add and delete ingredients to their pantry
	  	- Pantry supports auto-complete so it only allows a User to add ingredients that already exist in the database (ingredients that exist in at least one recipe in the database)
	  	- Pantry also allows for inputting ingredient amounts for the User's own account keeping (this does not translate in the search)
	  	- Existing ingredient amounts may be edited within the pantry
	-Search
	  	- By clicking Scavenge button, User can search for recipes that use a subset of ingredients in the logged-in user's pantry
	  	- The Recipes displayed in the Search results are ordered first by how many extra ingredients they use from what the User has in their pantry. Within all recipes with the same number of extra ingredients, the recipes are then ordered by their ratings
	  		- This allows for flexible search so a User can choose to substitute ingredients if they don't happen to have everything certain recipes call for
	  	- Displays found recipes with name and picture
	  	- User can click on a recipe to get a more indepth view with recipe ingredients, picture, name, serving size and instructions.
	-Recipe Mining
	 	- Recipe databases has been populated with recipes mined from external recipe sites.
	- Cookbook
	  	- User can save a Recipe they are currently viewing to their personal Cookbook using the Save button
	  	- If a Recipe is already in User's Cookbook, there is no Save button option on that Recipe's view
	  	- User can navigate to their Cookbook to view Recipes they have saved. They can click on these Recipes to view them. They can also delete Recipes from their Cookbook
	- Ratings
	  	- There is a current Rating displayed to the User in Recipe view that is uneditabale.  
	  		- For now, if no User's have rated the Recipe, the Rating is the Rating as mined from Yummly's website. Once a User in our app has rated a recipe, the recipe then defaults to being the aggregate of only our users' ratings
	  		- IMPORTANT NOTE: If you are the first User to rate a recipe (which is the case with most recipes at this point in time), the Recipe Rating will be the same as the rating you input.  This is because we switch over to only using User's in our system right when you rate it and you are the only User to have rated that Recipe
	  	- Under the current Rating, there is a set of 5 stars the User may use to rate the Recipe
	  		- Once a User clicks on the Rating they wish to rate the Recipe (only whole numbers), that number is then immediately saved to that Recipe's aggregate rating
	  		- Additionally, a User may only rate a Recipe once.  Once a User has rated a Recipe, they may rate it again multiple times but only their latest Rating will count towards the aggregate Rating of the Recipe

4. How to use Final Product
	- Create an account or use the Hook
		- If using the Hook:
			- Input how many people you are cooking for and what ingredients you currently have to cook for
			- Click Scavenge
			- Edit pantry items by deleting or adding new ingredients
			- Edit pantry amounts by clicking on the amount next to the ingredient in question
			- View Recipes by clicking on the Recipe in Search view
			- Create an account from the Pantry/Search page
		- Or just create an account right away
			- Click register and enter in your username and password
	- Sign in
		- Enter in your username and password and click sign in
	- Add ingredients to the pantry
		- Once logged in, just type in ingredient name in the text field, you will be presented with a drop down of all valid ingredients you can add to the pantry, either click on one or type in one exactly. Then specify an amount, any amount will do, including any sort of units you might want to add to the amount. For example, ("5 slices") for the ingredient, "Colby Jack Cheese". Then click the Add button.
	- Edit ingredients in pantry
		- Click on the "()" next to an existing ingredient to edit the ingredient amount
		- Click on the "x" next to an ingredient to delete it from the pantry
	- Search for Recipes
		- Click Scavenge
	- View Recipe
		- Click on the Recipe from the search page
	- Scale a Recipe
		- Enter the serving size you wish to scale the recipe to in the upper right box and click Scale
	- Save to Cookbook
		- Click on the Save button in a Recipe View
	- View Cookbook
		- Click on COOKBOOK in the Header to view
	- Delete Recipes from Cookbook
		- Click on the Delete button under any recipe in Cookbook
	- Rate a Recipe
		- When viewing a recipe, simply click on the number of stars you wish to rate the recipe under Rate Recipe. If you click multiple times, only your last rating counts


==============================
Developer Notes
==============================
handlebars -m templates/> public/javascripts/templates.js
