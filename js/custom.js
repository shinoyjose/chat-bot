$('.carousel').carousel({
    interval: false
});

$('.chat-button').click(function () {
    $('.chat-container').addClass('is-visible');
    $('.chat-button').addClass('hide');
});

$('.close-icon').click(function () {
    $('.chat-container').removeClass('is-visible');
    $('.chat-button').removeClass('hide');
});
