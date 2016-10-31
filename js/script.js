// JavaScript for MNTC

$(document).ready(function() {
		"use strict";
	
	
	// Scroll down opacity
	jQuery('.lead-text').vopacity(0.20, true);
	
	
   
	// Parallax effect
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40,
		responsive:true
		});
		
	
	
	// Header particles effect	
	$('#particles').particleground({
		dotColor: '#ddd',
		lineColor: '#ddd'
	  });
	 
	
	
	
	 // Header fixed 
	$('#nav').affix({
    	offset: {
       	top: 580
      }
	});
		



	// Header menu smooth scroll
	$('nav a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
		$('html,body').animate({
			scrollTop: target.offset().top
			}, 1000);
			return false;
			}
			}
		});
	
	
	
	// Header text typewriter effect
	$("#typed").typed({
    	strings: ["fun!", "awesome!"],
       	typeSpeed: 100,
       	backDelay: 4000,
       loop: true,
       loopCount: false,
       callback: function(){ foo(); },
       resetCallback: function() { newTyped(); }
	});
	$(".reset").click(function(){
	$("#typed").typed('reset');
    });
	
	function newTyped(){ /* A new typed object */ }
	function foo(){ console.log("Callback"); }
	
	
	
	//Counter effect
	var lastWasLower = false;
	$(document).scroll(function(){
	
	var p = $( "#process" );
	var position = p.position();
	var position2 = position.top;

	if ($(document).scrollTop() > position2-500){
	if (!lastWasLower)
		$('#1').html('330');
	  	$('#2').html('139');
	  	$('#3').html('247');
	  	$('#4').html('324');

	lastWasLower = true;
  		} else {
    lastWasLower = false;
  	}
	});
	  
	  
	  
	// OWL Carousels
	$('.posts-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay:false,
    	responsiveClass:true,
    	responsive:{
       		0:{
            items:1,
            nav:false
        	},
        	600:{
            items:1,
            nav:false
        	},
        	960:{
            items:2,
            nav:false
        	},
			1281:{
            items:2,
            nav:false
        	}
    	}
	});
	
	
	
	$('.testimonials-list').owlCarousel({
		loop:true,
    	margin:0,
		autoplay:true,
		controls:true,
    	responsiveClass:true,
    	responsive:{
       		0:{
            items:1,
            nav:false
        	},
        	600:{
            items:1,
            nav:false
        	},
        	960:{
            items:1,
            nav:false
        	},
			1281:{
            items:1,
            nav:false
        }
    }
	});
	
	$('.logos-list').owlCarousel({
    	loop:true,
		margin:0,
		autoplay:true,
    	responsiveClass:true,
    	responsive:{
       		0:{
            items:2,
            nav:false
        	},
        	600:{
            items:3,
            nav:false
        	},
        	960:{
            items:4,
            nav:false
        },
			1281:{
            items:4,
            nav:false
       		}
    	}
	});
	
	
	
	
});


	
	// Isotope works filter
	$(window).load(function(){
		var $container = $('.works-container');
    $container.isotope({
		filter: '*',
       animationOptions: {
       duration: 750,
       easing: 'linear',
       queue: false
       }
    });
 
	$('.filter a').click(function(){
	$('.filter .current').removeClass('current');
	$(this).addClass('current');
 
    var selector = $(this).attr('data-filter');
    $container.isotope({
    	filter: selector,
       animationOptions: {
       duration: 750,
       easing: 'linear',
       queue: false
		}
	});
    	return false;
    }); 
});


	 // Google maps pin tooltip	
	var markers = [
    	{
       		"lat": '23.550715',
           "lng": '87.290407',
			"description": 'Conceito Office. <br/><a href="http://www.mntc.in" style="color:#ef3c3c; font-weight:700;">Get it now</a>'
        }
	];
	
	
	// Google maps main api
	window.onload = function () {
		var mapOptions = {
			center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
        	zoom: 15,
			flat: true,
			scrollwheel:false,
			panControl:false,
			zoomControl:true,
			streetViewControl: false,
			mapTypeControl: false,
           	styles: [ { "stylers": [ { "gamma": "2.10" } ] } ],
           	mapTypeId: google.maps.MapTypeId.ROADMAP
        };
			var infoWindow = new google.maps.InfoWindow();
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			for (i = 0; i < markers.length; i++) {
			var data = markers[i]
           	var myLatlng = new google.maps.LatLng(data.lat, data.lng);
			var marker = new google.maps.Marker({
           	position: myLatlng,
           	map: map,
        	icon: 'images/map_pin.png',
           	title: data.title
           	});
			(function (marker, data) {
           	google.maps.event.addListener(marker, "click", function (e) {
              	infoWindow.setContent(data.description);
              	infoWindow.open(map, marker);
              });
            })(marker, data);
        }
    };
	