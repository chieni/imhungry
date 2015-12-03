var Trie = function() {

	var that = Object.create(Trie.prototype)

	//root node of the trie
	var root = {
		key: "root",
		children: []
	}
	
	//takes in an index and word and inserts the word into the trie
	that.insert = function(index, word) {

		var current = root;
		var splitWord = word.split(''); //splits the word into an array of characters
		splitWord.push("0"); //marks the end of the word

		$.each(splitWord, function(i, letter) { 
			var keys = $.map(current.children, function(c) {return c["key"]}); 
			var letterIndex = $.inArray(letter, keys); 

			if (letterIndex == -1) { //the current letter is not a child of the current node
				var newNode = {key:letter, children: []}; //create a new node with the letter and no children
				current.children.push(newNode); //push the new node onto the current node's children
				current = newNode; //move the pointer to the new node
			}
			else {
				current = current.children[letterIndex]; //move the pointer to the node with the current letter
			}
		})
	}

	//takes in a starting node and input prefix to find and build a word from the trie
	var traverse = function(head, input) {

		var results = [];
		var queue = [];

		//breadth-first search through the trie
		var bfs = function(head, input) {

			queue.push({node: head, string: input}); //push the head node onto queue

			while (queue.length > 0) { //bfs through the queue while it's not empty
				var popped = queue.shift(); //pop the first element
				if (popped.node.key == "0") { //signifies the end of the word
					results.push(popped.string.substring(0, popped.string.length-1)); //add the word to results, removing the end marker
				}
				else {
					$.each(popped.node.children, function(i, child) { //traverse through children of the current node
						queue.push({node: child, string: popped.string+child.key}); //add the child and the new prefix onto the queue
					})
				}
			}
		}

		bfs(head, input);
		return results;
	}

	//finds the input word in the trie
	that.find = function(input) {

		var input = input.toLowerCase(); //ensures that capitalization won't be an issue
		var allWords = [];
		var current = root;
		var splitWord = input.split('');

		$.each(splitWord, function(i, letter) {
			var keys = $.map(current.children, function(c) {return c["key"]});
			var letterIndex = $.inArray(letter, keys);

			if (letterIndex == -1) { //the letter could not be found in the tree
				allWords = []; //no results
				return false; //breaks the loop
			}
			else {
				current = current.children[letterIndex]; //move pointer to the next letter
				if (i == splitWord.length - 1) { //at the last entered letter
					allWords = traverse(current, input); //traverse through the tree to find the word
				}
			}
		})

		allWords.sort(); //sort all words lexicographically
		var NUM_WORDS_TO_SHOW = 10;
		var tenWords = allWords.slice(0, NUM_WORDS_TO_SHOW);
		return tenWords;
	}

	Object.freeze(that);
	return that;
}



