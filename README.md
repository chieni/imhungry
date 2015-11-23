chieni_nlucas_zlily_mmgong_final
================================
1. URL:

2. Instructions for local deployment:
	a. in terminal window, run mongo
		use command: mongod
	b. in another terminal window run: npm install
			    		   npm start
	c. in browser, navigate to localhost:3000

3. MVP Features
	- User can create an account with a unique username, a password, and their own pantry
	-Pantry
	  - User can add and delete ingredients to their pantry
	-Search
	  - By clicking Scavenge button, User can search for recipes that only use a subset of ingredients in the logged-in user's pantry
	  - Displays found recipes with name and picture
	  - User can click on a recipe to get a more indepth view with recipe ingredients, picture, name, serving size and instructions.
	-Recipe Mining
	 - Recipe databases has been populated with recipes mined from external recipe sites.
  Unimplemented Features
	- Cookbook
	  - We have not yet implemented the Cookbook where the user can choose to save recipes in their personal Cookbook
	- Ratings
	  - We have not yet implemented recipe ratings where users can rate a recipe
	  - Ratings will be displayed in recipe view
	- Pantry
	  - We have not yet implemented ingredient amounts. Users will be able to specify (if they wish) how much of an ingredient that they have.If the user does not specify the amount, the ingredient amount will be assumed to be infinite.
	- Search by ingredient amounts
	  - We have not yet implemented the more advanced recipe search where recipes returned by the search will not require more of an ingredient than the user has in their pantry.
	- Search with Extra Ingredients
	  - We have not yet implemented another advanced search feature that allows the user to specify whether or not they wish to allow recipes to be returned that require additional ingredients to the ingredients in their pantry. If so, the user can also specify up to how many additional ingredients they will allow.
	- Search with less ingredients
	  - We have not yet implemented this feature that allows the user to specify which ingredients in their pantry that they want to use in their recipe search.
	- Recipe Scaling with Serving Size
	  - We have not yet implemented recipe scaling where a user can specify the desired serving size for a recipe when they search so that returned recipes will all be scaled by amount to the specified serving size. 

4. How to use MVP
	- Create an account
	  - Click register and enter in a username and password
	- Sign in
	  - enter in your username and password and click sign in
	- Add ingredients to pantry
	  - once logged in, just type in ingredient name in text field and click add button
	- to search recipes
	  - click Scavenge button
	- to get recipe view for a recipe
	  - click on recipe name or image
