//////////////////////// Loader

$(window).load(function() {
            $('#preloader').delay(2000).fadeOut('slow');
            $(".Yo").delay(2300).queue(function(next) {
                $(this).addClass("Yo-appearing");
                next();
                });
            $(".Yo2").delay(2300).queue(function(next) {
                $(this).addClass("Yo2-appearing");
                next();
                });
      });

//////////////////////// Logo disapearing

$(document).ready(function() {
	var YoTop = $('.Yo').offset().top;
	var stickyNav = function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > YoTop) {
			$('.Yo').addClass('Yo-disapear');
			$('.Yo2').addClass('Yo-disapear');
			$('.logo').addClass('logo-appearing');
		} else {
			$('.Yo').removeClass('Yo-disapear');
			$('.Yo2').removeClass('Yo-disapear');
			$('.logo').removeClass('logo-appearing');
		}
	};
	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});
});

//////////////////////// Scroll disapearing

$(function() {
	$(window).scroll(function() {
		var winTop = $(window).scrollTop();
		if (winTop >= 100) {
			$(".scroll-div").addClass("scroll-div-disapear");
		} else {
			$(".scroll-div").removeClass("scroll-div-disapear");
		}
        if (winTop >= $(window).height()*0.95) {
			$('.cd-project').addClass('white-background');
		} else {
			$('.cd-project').removeClass('white-background');
		}
        if (winTop >= $(window).height()*0.1) {
			$('.cd-project').addClass('nav-white-background');
		} else {
			$('.cd-project').removeClass('nav-white-background');
		}
	});
});
function mainBannerScroll(scroll) {
	$('.elm1').css({
		'transform': 'translate(0px, -' + scroll * 2 + '%)'
	});
}

//////////////////////// About

$(document).on('click', "#btn-contact", function () {
    $('.a-about').toggleClass('a-about-active');
	$('.about').toggleClass('about-active');
	$('.btn-overflow').toggleClass('btn-overflow-active');
	$('.cd-project').toggleClass('black-background');
	$('.cd-project').toggleClass('nav-black-background');
    $('body').toggleClass('noscroll');
    $('body').toggleClass('about-is-open');
    return false;
});



