$(function() {
    $.getJSON('https://ajax.googleapis.com/ajax/services/search/images?v=1.0&imgsz=medium|large|xlarge|xxlarge&rsz=8&as_rights=(cc_publicdomain|cc_attribute|cc_sharealike|cc_nonderived).-(cc_noncommertial)&as_filetype=jpg|png|gif&safe=moderate&callback=?', {'q':words.join(' || ')}, function(data) {
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
