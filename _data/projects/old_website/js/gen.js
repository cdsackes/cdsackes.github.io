
var h2 = $('.header2');
$(window).on('scroll', function () {
    var st = $(this).scrollTop();
    h2.css({
        'opacity': 1
    });
});

var scrollSwtich = function(){
    var h1 = $('.scrollHeader');
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        var wh = (window.innerHeight - 60);
        if (wh > st) {
            if (!h1.hasClass('nav-hide')){
                h1.toggleClass("nav-hide");
            }
            if (h1.hasClass('nav-show')){
                h1.toggleClass("nav-show");
            }
        };
        if (st > wh) {
            if (h1.hasClass('nav-hide')){
                h1.toggleClass("nav-hide");
            }
            if (!h1.hasClass('nav-show')){
                h1.toggleClass("nav-show");
            }
        };
    });
}

$(document).ready(function(){
    scrollSwtich();
});
