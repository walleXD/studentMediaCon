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
