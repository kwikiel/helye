$(function() {
	$.getJSON('https://ajax.googleapis.com/ajax/services/search/images?v=1.0&callback=?', {'q':words.join(' || ')}, function(data) {
		results = data.responseData.results;
		//for(var i in results)
		{
			var i = 0; // hardcore
			$img = $('<img>');
			$img.attr('src', results[i].url);
			$img.appendTo($('#image_wrapper'));
			return;
		}
		})
	$(document).click(function(e) {
		window.location.reload()
	});
});
