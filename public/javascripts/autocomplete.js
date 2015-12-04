  	document.addEventListener('DOMContentLoaded', function () {

	  var trie = Trie(); //create a new trie
	  $.each(INGREDIENT_NAMES, trie.insert); //insert all the words

	  CONTROLLER.registerAutocompleteListener(function (word) {

	    var foundWords = trie.find(word); //finds the input word in the trie

	  	CONTROLLER.clearSearchResults();

	  	// if (foundWords.length == 0) {
	  	// 	$("#add-ing-btn").attr('disabled','disabled');
	  	// 	console.log("none found");
	  	// }
	  	// else {
	  	//	$("#add-ing-btn").removeAttr('disabled');
		  	// Display the found words
		  	$.each(foundWords, function(i, w) {
		  		if (w != undefined) {
			  	  CONTROLLER.appendToSearchResults(w);
			  	}
		  	})	  		
	  //	}

	  	
      });

  	});