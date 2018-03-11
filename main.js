// smooth scroll
$(document).ready(function() {	
	var scrollTime = 1;				
	var scrollDistance = 200;		
		
	$(window).on("mousewheel DOMMouseScroll", function(event) {
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3; 
		var finalScroll = $(window).scrollTop() - parseInt(delta*scrollDistance);
			
		TweenMax.to( $(window), scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});		
	});
});

// navbtn
$(document).ready(function() {	
	$('#navbtn').on('click', function() {
		$('#navbtn').toggleClass("change");
	});
});

// autoscroll
$(document).ready(function() {
	$("#nav-header").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#header").offset().top}, 2000, "swing"); 
	});
	$("#nav-c1").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#c1").offset().top}, 2000, "swing"); 
	});
	$("#nav-c2").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#c2").offset().top}, 2000, "swing"); 
	});
	$("#nav-c3").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#c3").offset().top}, 2000, "swing"); 
	});
	$("#nav-c4").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#c4").offset().top}, 2000, "swing"); 
	});
	$("#nav-c5").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#c5").offset().top}, 2000, "swing"); 
	});
	$("#nav-c6").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#c6").offset().top}, 2000, "swing"); 
	});
	$("#nav-c7").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#c7").offset().top}, 2000, "swing"); 
	});
	$("#nav-c8").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#c8").offset().top}, 2000, "swing"); 
	});
	$("#nav-c9").click(function() {
		$("nav").fadeToggle();
		$('#navbtn').toggleClass("change");
		$("html, body").animate({scrollTop: $("#c9").offset().top}, 2000, "swing"); 
	});
});

$(document).ready(function() {
    $("div#navbtn").click(function() {
        $("nav").fadeToggle();
    });
});

// fade
$(document).ready(function() {
    $(window).scroll(function() {
        $("li").each(function() {
            var element_bottom = $(this).offset().top + $(this).outerHeight();
            var window_bottom = $(window).scrollTop() + $(window).height();
            
            if (window_bottom > element_bottom){             
                $(this).animate({'opacity': '1'}, 1500, 'swing');
            }
        }); 
    }); 
});

// parallax
$(document).ready(function() {
		$("[id='d0']").height(($("[id='c0']").outerHeight() / 2));
		$("[id='d1']").height(($("[id='c1']").outerHeight() / 2));
		$("[id='d2']").height(($("[id='c2']").outerHeight() / 2));
		$("[id='d3']").height(($("[id='c3']").outerHeight() / 2));
		$("[id='d0']").height(($("[id='c0']").outerHeight() / 2));
		$("[id='d4']").height(($("[id='c4']").outerHeight() / 2));
		$("[id='d5']").height(($("[id='c5']").outerHeight() / 2));
		$("[id='d6']").height(($("[id='c6']").outerHeight() / 2));
		$("[id='d7']").height(($("[id='c7']").outerHeight() / 2));
		$("[id='d8']").height(($("[id='c8']").outerHeight() / 2));
		$("[id='d9']").height(($("[id='c8']").outerHeight() / 2));
});

// parallax
$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		$("#back").css({
			"transform": "translateY(" +  (scroll/2)  + "px)"
		});
	});
});

$(document).ready(function() {
	$("nav div#nav > div.nav", this).hover(function(){
    	$("div.navline", this).animate({'width': '100px'}, 500, "swing");
    }, function() {
    	$("div.navline", this).animate({'width': '0%'}, 500, "swing");
    });
});

$(document).ready(function() {
	$(window).mousemove(function(e){
		var x = e.pageX / 5 * -1;
		var y = e.pageY / 5 * -1;

		$("div#logo").css({
			"transform" : "translate(" + x + "px," + y + "px)"
		});
	});
});