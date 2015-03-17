console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// STELLAR.JS
	$('#main').stellar();

	$.stellar({
	  // horizontalOffset: -200,
	  // verticalOffset: -400,
	  responsive: true,
	  scrollProperty: 'scroll',
	  positionProperty: 'position'
	});

	// BX-SLIDR
	$('#l-bxslidr').bxSlider({
		pager: false,
		infiniteLoop: false,
		touchEnabled: true
	});

	// MOBILE NAV 

	$('#toggle-switch').on("click", function(){
		console.log("button clicked");
		$('.mobile-nav').toggleClass('view-toggle');
	})

	// WAYPOINTS
	$('.l-kitchen').waypoint(function() {
	  	TweenMax.to("#kitchen-overlay", 2, {
			left: "100%",
			autoAlpha: 1,
			ease: Back.easeOut
		});

	  	TweenMax.to(".l-kitchen-copy", 2, {
			scale: 1,
			autoAlpha: 1,
			ease: Back.easeInOut
		});
	}, { offset: "25%" });

	// COUCH
	$('.l-couch').waypoint(function() {
	  	TweenMax.to("#couch-overlay", 2, {
			left: "-100%",

			ease: Back.easeOut
		});

	  	TweenMax.to(".l-couch-copy", 2, {
			scale: 1,
			autoAlpha: 1,
			ease: Back.easeInOut
		});

	}, { offset: "25%" });

	$('.l-bathroom').waypoint(function() {
	  	TweenMax.to("#bathroom-overlay", 2, {
			left: "-100%",
			ease: Back.easeOut
		});

	  	TweenMax.to(".l-bathroom-copy", 2, {
			scale: 1,
			autoAlpha: 1,
			ease: Back.easeInOut
		});

	}, { offset: "25%" });

	// SITE SCROLL TO NAVIGATION
	$(".nav-home").click(function() {
	    $('html, body').animate({
	        scrollTop: $("header").offset().top
	    }, 2000);
	});

	$(".nav-kitchen").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".l-kitchen").offset().top
	    }, 2000);
	});

	$(".nav-living").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".l-couch").offset().top
	    }, 2000);
	});

	$(".nav-bathroom").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".l-bathroom").offset().top
	    }, 2000);
	});

	$(".l-video-container").click(function(){
	     window.location=$(this).find("a").attr("href"); 
	     return false;
	});


	// BOTTOM BEFORE CLOUSURE
	var init = function() {
		console.log('cornerstone API works');

	};

	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	cornerstoneAPI.init();

});
