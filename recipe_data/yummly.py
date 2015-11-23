from urllib2 import Request, urlopen, URLError
import json

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

for i in xrange(30000,50000,100):
	retrieve_recipes(i, 100)
# read_recipes("recipes0-2.txt")