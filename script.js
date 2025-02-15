
$(document).ready(function() {
    $('#no-button').on('mouseenter', function() {
        var randomTop = Math.floor(Math.random() * 80) + 10;
        var randomLeft = Math.floor(Math.random() * 80) + 10;
        $(this).css({
            top: randomTop + '%',
            left: randomLeft + '%'
        });
    });

    $('.yes').on('click', function(event) {
        event.preventDefault();
        $('.container').html('<h1>Urime!</h1><p>Ju jeni pjestari më i ri i komunitetit!</p>');
    });
});
