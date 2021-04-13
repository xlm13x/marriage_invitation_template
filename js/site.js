jQuery(window).load(function () {
	"use strict";
	//PRELOADER
	jQuery('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
});


jQuery(document).ready(function ($) {
	'use strict';
	$('.img-holder').imageScroll();

	// Scrollbar 
	if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
	window.onmousewheel = document.onmousewheel = wheel;

	function wheel(event) {
		var delta = 0;
		if (event.wheelDelta) delta = event.wheelDelta / 120;
		else if (event.detail) delta = -event.detail / 3;

		handle(delta);
		// if (event.preventDefault) event.preventDefault();
		event.returnValue = false;
	}

	function handle(delta) {
		var time = 800; // delay time
		var distance = 350; // delta point 
		// Dom where it will apply 
		$('html, body').stop().animate({
			scrollTop: $(window).scrollTop() - (distance * delta)
		}, time);
	}
});



// jQuery for page scrolling feature - requires jQuery Easing plugin
jQuery(document).ready(function ($) {
	'use strict';
	$('.Main_Menu').singlePageNav({
		offset: 60,
		updateHash: false,
	});
});

$(window).on("scroll touchmove", function () {
	$('#header_nav').toggleClass('navbar-shrink', $(document).scrollTop() > 0);
});

// Highlight the top nav as scrolling occurs
jQuery(document).ready(function ($) {
	'use strict';
	$('body').scrollspy({
		target: '.navbar-fixed-top'
	});

});

// Closes the Responsive Menu on Menu Item Click
jQuery(document).ready(function ($) {
	'use strict';
	$('.navbar-collapse ul li a').click(function () {
		$('.navbar-toggle:visible').click();
	});
});


// Image Popup
jQuery(document).ready(function ($) {
	"use strict";
	$("a[data-gal^='prettyPhoto']").prettyPhoto({
		hook: 'data-gal'
	});
});

// Google Map
jQuery(document).ready(function ($) {
	"use strict";
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		var myLatlng = new google.maps.LatLng(19.0969054,73.0038);
		var maptooltipbold = 'Location';
		var maptooltip = 'See You Here!';
		//---------------------------------------------------------//
		var mapOptions = {
			zoom: 17,
			scrollwheel: false,
			center: myLatlng,
			streetViewControl: false,
		};

		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var image = 'img/mapPin.png';
		var content = document.createElement('div');
		content.innerHTML = "<div class=" + "map-tooltip" + "><h4><strong>" + maptooltipbold + "</strong></h4><hr>" + "<h5>" + maptooltip + "</h5></div>";
		var infowindow = new google.maps.InfoWindow({
			content: content
		});

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			draggable: false,
			scrollwheel: false,
			icon: image,
			animation: google.maps.Animation.BOUNCE
		});
		google.maps.event.addListener(marker, 'click', function () {
			// alert(1);
			// infowindow.open(map, marker);
			window.open(
				'https://www.google.com/maps/dir/?api=1&destination=Mahalaxmi+Temple+Bhavan,+Plot+-+23,+Sector+14,+Kopar+Khairane,+Navi+Mumbai,+Maharashtra',
				'_blank'
			);
		});

	}
});

// Back to Top
jQuery(document).ready(function ($) {
	"use strict";
	$(window).scroll(function () {
		if ($(this).scrollTop() > 450) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	$('#mainLogo').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
});

//CountDown timer

// Countdown
jQuery(document).ready(function ($) {
	'use strict';
	var weddingDate = new Date("2019/12/08 14:30:00");
	$(".countdown").countdown({
		// until: new Date(2016, 12-9, 18),
		until: weddingDate,
		padZeroes: true,
		format: 'ODHMS'
	});
});


jQuery(document).ready(function ($) {
	"use strict";
	$('.video-bg-self-2').css('height', '100vh');

});
//Copyright Footer
jQuery(document).ready(function ($) {
	'use strict';
	document.getElementById("copyright").innerHTML =
		"&copy;  " + new Date().getFullYear() + " <a href='http://www.facebook.com/brainspiller'>Bhavesh Bhanushali</a>.";
});


// Pagination Script
jQuery(document).ready(function ($) {
	$(".blog_main_sec .pagination > li > a").click(function () {
		$(this).parent().addClass("active disabled");
		$(".blog_main_sec .pagination > li").removeClass("active disabled");
	});
});

jQuery(document).ready(function ($) {
	$(".blog_main_sec .pagination > li:nth-child(2) > a").click(function () {
		$(".blog_main_sec .pagination > li:nth-child(1)").addClass("hide");
	});
	$(".blog_main_sec .pagination > li:not(:nth-child(2)) > a").click(function () {
		$(".blog_main_sec .pagination > li:nth-child(1)").removeClass("hide");
	});
	$(".blog_main_sec .pagination > li:nth-last-child(2) > a").click(function () {
		$(".blog_main_sec .pagination > li:last-child").addClass("hide");
	});
	$(".blog_main_sec .pagination > li:not(:nth-last-child(2)) > a").click(function () {
		$(".blog_main_sec .pagination > li:last-child").removeClass("hide");
	});
});