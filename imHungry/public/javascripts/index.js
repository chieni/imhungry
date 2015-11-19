var loadPage = function(template, data) {
	data = data || {};
	$('#main-container').html(Handlebars.templates[template](data));
};

var loadSearchPage = function() {
	loadPage('search');
};

$(document).ready(function() {
	loadSearchPage();
});