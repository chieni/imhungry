from urllib2 import Request, urlopen, URLError
import json

# Primary author: chieni
def retrieve_recipes(start, maxResult):
	APP_ID = "d98c2df5"
	APP_KEY = "53bfdf37d6791000dd39d4a054ba26ff"
	request = Request('http://api.yummly.com/v1/api/recipes?_app_id=' + APP_ID 
		+ '&_app_key='+ APP_KEY +'&q=&maxResult=' + str(maxResult) + '&start=' + str(start))
	try:
		response = urlopen(request)
		read = response.read()
		read_json = json.loads(read)
		matches = read_json["matches"]

		with open('./recipe_data/recipes'+str(start)+'-'+str(maxResult-1 + start)+'.txt', 'w') as outfile:
			for match in matches:
				print match["id"]
				recipe_request = Request("http://api.yummly.com/v1/api/recipe/"+match["id"]+"?_app_id="+APP_ID+"&_app_key=" + APP_KEY)
				recipe_response = urlopen(recipe_request)
				recipe_read = recipe_response.read()
				recipe_json = json.loads(recipe_read)
				json.dump(match, outfile)
				outfile.write(',')
				outfile.write('\n')
				json.dump(recipe_json, outfile)
				outfile.write(',')
				outfile.write('\n')

		print len(matches)

	except URLError, e:
	    print 'No response. Got an error code:', e

def read_recipes(filename):
	with open(filename, "r") as ins:
		for line in ins:
			print line
	ins.close()

def translate_to_json(filename):
	f = open('./txt-files/' + filename + '.txt', "r")
	recipes_array = []
	while True:
		recipe = {}
		line1 = f.readline() # search recipes json : recipeName, totalTimeInSeconds, ingredients, rating
		if not line1: break
		line1 = line1[:-2]
		search_json = json.loads(line1)

		recipe["name"] = search_json["recipeName"]
		recipe["totalTime"] = search_json["totalTimeInSeconds"]
		recipe["ingredients"] = search_json["ingredients"]
		recipe["rating"] = search_json["rating"]

		line2 = f.readline() # recipe json : numberOfServings, ingredientLines, source.sourceRecipeUrl, images: get all key,val
		line2 = line2[:-2]
		recipe_json = json.loads(line2)

		recipe["servingSize"] = recipe_json["numberOfServings"]
		recipe["ingredientsWAmounts"] = recipe_json["ingredientLines"]
		if "sourceRecipeUrl" in recipe_json["source"]:
			recipe["sourceURL"] = recipe_json["source"]["sourceRecipeUrl"]
		else: 
			continue

		images = []

		if "hostedLargeUrl" in recipe_json["images"][0]:
			images.append(recipe_json["images"][0]["hostedLargeUrl"])
		if "hostedMediumUrl" in recipe_json["images"][0]:
			images.append(recipe_json["images"][0]["hostedMediumUrl"])
		if "hostedSmallUrl" in recipe_json["images"][0]:
			images.append(recipe_json["images"][0]["hostedSmallUrl"])

		recipe["imageURLs"] = images

		recipes_array.append(recipe)
	with open('./json-files/' + filename + '.json', 'w') as outfile:
		json.dump(recipes_array, outfile)

	f.close()

