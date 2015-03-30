console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// STICKY HEADER
	$('.nav-bar').addClass('original').clone().insertAfter('.nav-bar').addClass('cloned').css('position','fixed').css('top', 0).css('margin-top', 0).css('z-index','500').removeClass('original').hide();

	scrollIntervalID = setInterval(stickIt, 1);

	function stickIt() {

		var orgElementPos = $('.original').offset();
		
		orgElementTop = orgElementPos.top;               

		if ($(window).scrollTop() >= (orgElementTop)) {
			orgElement = $('.original');
			coordsOrgElement = orgElement.offset();
			leftOrgElement = coordsOrgElement.left;  
			widthOrgElement = orgElement.css('width');
			$('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
			$('.original').css('visibility','hidden');
		} else {
			$('.cloned').hide();
			$('.original').css('visibility','visible');
		}
	}
	// end sticky header

	// PARALLAX STUFF

	var aboveFoldParallax = new TimelineMax({paused: true});
				
	aboveFoldParallax.to(".l-above-fold", 1, {css:{"background-position-y": 100}});

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 5000;

		$(".l-above-fold").waypoint(function() {

			aboveFoldParallax.seek(parallaxTiming);

		}, { offset: "90%" });
	});

	var typefaceParallax = new TimelineMax({paused: true});
				
	typefaceParallax.to(".hero-text", 2, {css:{"background-position-y": 3000}});

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 5000;

		$(".hero-text").waypoint(function() {

			typefaceParallax.seek(parallaxTiming);

		}, { offset: "90%" });
	});

	var brushParallax = new TimelineMax({paused: true});
				
	brushParallax.to(".parallax-brush", 2, {css:{"top": 2000}});

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 5000;

		$(".parallax-brush").waypoint(function() {

			brushParallax.seek(parallaxTiming);

		}, { offset: "90%" });
	});

	var bathroomParallax = new TimelineMax({paused: true});
				
	bathroomParallax.to(".l-bathroom", 1, {css:{"background-position-y": 100}});

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 5000;

		$(".l-bathroom").waypoint(function() {

			bathroomParallax.seek(parallaxTiming);

		}, { offset: "90%" });
	});

	var kitchenParallax = new TimelineMax({paused: true});
				
	kitchenParallax.to(".l-kitchen", 2, {css:{"background-position-y": 100}});

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 5000;

		$(".l-kitchen").waypoint(function() {

			kitchenParallax.seek(parallaxTiming);

		}, { offset: "90%" });
	});

	var couchParallax = new TimelineMax({paused: true});
				
	couchParallax.to(".l-couch", 2, {css:{"background-position-y": 100}});

	window.addEventListener("scroll", function(){
		var parallaxTiming = document.body.scrollTop / 5000;

		$(".l-couch").waypoint(function() {

			couchParallax.seek(parallaxTiming);

		}, { offset: "90%" });
	});
	// end parallax section

	// MOBILE NAV 
	$('#toggle-switch').on("click", function(){
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


	// BOTTOM BEFORE CLOUSURE
	var init = function() {
		
		TweenMax.to(".hero-text" , 0.75, {
			left: 0,
			autoAlpha: 1,
			ease: Back.easeOut
		});

	};

	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	cornerstoneAPI.init();

});
