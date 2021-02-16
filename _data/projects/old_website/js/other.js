$(document).ready(function () {
    $('.row1').mouseover(function () {
        var elem = $('.label', this);
        elem.animate({
            opacity: 1,
        }, 0.01)

    });
    $('.row1').mouseleave(function () {
        var elem = $('.label', this);
        elem.animate({
            opacity: 0,
        }, 0.01)

    });
    
var divs = $('.header2');
$(window).on('scroll', function () {
    var st = $(this).scrollTop();
    divs.css({
        'opacity': (1 - st / 35)
    });
});

});