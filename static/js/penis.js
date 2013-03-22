function reload() {
    $.getJSON('/api/words', function(words) {
        $.getJSON('https://ajax.googleapis.com/ajax/services/search/images?v=1.0&imgsz=medium|large|xlarge|xxlarge&rsz=8&as_rights=(cc_publicdomain|cc_attribute|cc_sharealike|cc_nonderived).-(cc_noncommertial)&as_filetype=jpg|png|gif&safe=moderate&callback=?', {'q': words.join(' || ')}, function(data) {
            results = data.responseData.results;

            // replace words
            $('#word1').text(words[0]);
            $('#word2').text(words[1]);

            // TODO: insert it w/out jQuery, would be faster
            $img = $('<img>');
            $img.attr('src', results[0].url);
            $('#image_wrapper').html($img);
        });
    });
}

function prefetch_images() {
    // check how much images are there
    var qty_max = 3;
    var qty = qty_max - 1; // testing

    // fetch and add images
    for(var i = 0; i < qty; i++) {
    }
}

$(function() {
    reload();

    $(document).click(function(e) {
        reload();
    });
});
