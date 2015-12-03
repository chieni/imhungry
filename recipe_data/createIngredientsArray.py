def createIngredientsArray(filename):
	with open(filename) as f:
	    lines = f.read().splitlines()
	    return lines

print createIngredientsArray('ingredients.txt')
