// Init plugins
$.stellar();

$('nav').onePageNav({
    scrollThreshold: $(window).width()>768 ? 0.3 : 0
});

$('.bxslider').bxSlider({
    captions: true
});
// End init plugins

const nav = $('nav ul');

// Toggle nav when user clicks menu icon
$("#menu").click(function(e) {
    toggleNav(e);
});

// Close nav when user clicks outside the nav
$(window).click(function(e) {
    const width = $(window).width();
    if (width < 768 && nav.css("display")==="block") {
        toggleNav(e);
    }
});

// Slide toggle avoiding event's default behavior/propagation
function toggleNav(e) {
    e.preventDefault();
    e.stopPropagation();
    nav.slideToggle(); 
}

// Shows the nav again after resizing the window
$(window).resize(function(){
    const width = $(window).width();
    if (width > 768 && nav.is(':hidden')){
        nav.removeAttr('style');  
    }
});