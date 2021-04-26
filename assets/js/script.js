$(document).on('turbolinks:load', function () {
	'use strict';
	
	// preloader
	$('.preloader').delay(100).fadeOut(10);

	// re initialize bootstrap dropdown for turbolinks
	$('.dropdown-toggle').dropdown()

	//slider
	$('.slider').not('.slick-initialized').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		dots: true,
		arrows: false,
		infinite: true,
		lazyLoad: "ondemand"
	});

})(jQuery);
