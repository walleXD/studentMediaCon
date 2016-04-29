// default navBar
$(".button-collapse").sideNav();

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

// contact form landing page
// $('#textarea1').trigger('autoresize');

// map on home page
// function initMap() {
// 	console.log("initializing map");
// 	var mapDiv = document.getElementById('map');
// 	var map = new google.maps.Map(mapDiv, {
// 		center: {lat: 40.768141, lng: -73.96386},
// 		zoom: 14
// 	});
// 	console.log('map completed!');
// }

// landing page scrool up button
$('.goUp').hide();
var isVisible = false;
$(window).scroll(function(){
     // var shouldBeVisible = true;
     var shouldBeVisible = $(window).scrollTop()>200;
     // console.log(shouldBeVisible);
     if (shouldBeVisible && !isVisible) {
          isVisible = true;
          $('.goUp').fadeIn("slow");
     } else if (isVisible && !shouldBeVisible) {
          isVisible = false;
          $('.goUp').fadeOut("slow");
    }
});

// landingPage smooth scrool
$(function() {
  $('.smoothScrool a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});