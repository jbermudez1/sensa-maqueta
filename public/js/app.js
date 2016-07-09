$(document).ready( function (argument) {
	console.log('ready..')

	var width = $(window).width();
	console.log(width)
	if (width < 992) {
		mobileDevice();

	};

})

function mobileDevice () {
	$('body').on({
	    'touchmove': function(e) {
	        e.preventDefault();
	        e.stopPropagation();
	    },
	    'mousewheel': function(e) {
	        e.preventDefault();
	        e.stopPropagation();
	    }
	})

	$('.circle').click( function () {
		$('.menu').toggleClass('hiden-nav')
	})

	$('.icon-menu').click( function () {
		$('.menu').toggleClass('hiden-nav')
	})

	//
	$('.icon-checkout').click( function () {
		$('.aside').toggleClass('show-aside')
	})

}