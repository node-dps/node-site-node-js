// menu magic by Rahul Batra
$(".nav-toggle").click(function() {
    $(".line").fadeOut("fast");
    $(".sidemenu").removeClass("side");
    $(".sidemen").removeClass("side");
    $(".body").addClass("freeze");
});
// close the menu
$(".cross").click(function() {
    $(".body").removeClass("freeze");
    $(".line").fadeIn("fast");
    $(".sidemenu").addClass("side");
    $(".sidemen").addClass("side");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        //basically listens to all anchors being clicked on
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
            // then takes every single event to make it smooooooooooooth
            // and repeat
        });
    });
});
$(".sidemenu a").click(function() {
    $(".body").removeClass("freeze");
    $(".line").fadeIn("fast");
    $(".sidemenu").addClass("side");
    $(".sidemen").addClass("side");
});
$('.about').fadeOut();
$('.red h1 ').fadeOut();
$(".red").delay("5000").fadeIn();
$(".red").hover(function() {
    $('.red h1').fadeIn();
    $('.red h1').addClass('up');
});