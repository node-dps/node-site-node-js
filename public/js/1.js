$('.about').fadeOut();
$('.red h1 ').fadeOut();
$(".red").delay("5000").fadeIn();
$(".red").hover(function() {
    $('.red h1').fadeIn();
    $('.red h1').addClass('up');
});