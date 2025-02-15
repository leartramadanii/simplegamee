
$(document).ready(function() {
    var noButtonTries = 0;

    function moveNoButton() {
        var randomTop = Math.floor(Math.random() * 80) + 10;
        var randomLeft = Math.floor(Math.random() * 80) + 10;
        $('#no-button').css({
            top: randomTop + '%',
            left: randomLeft + '%'
        });
    }

    $('#no-button').on('mouseenter touchstart', function(event) {
        event.preventDefault();
        noButtonTries++;

        if (noButtonTries >= 4) {
            $('.container').append('<p class="almost-straight">You almost straight</p>');
            noButtonTries = 0;
        } else {
            moveNoButton();
        }
    });

    $('.yes').on('click', function(event) {
        event.preventDefault();
        $('.container').html('<h1>Urime!</h1><p>Ju jeni pjestari më i ri i komunitetit!</p>');
    });
});
