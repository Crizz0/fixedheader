$(function () {
	'use strict';
	// Detect scrolling
	let $pageHeader = $('#page-header');
	let yOffset = 0;
	let setpoint = 0;

	$(window).scroll(function () {
		yOffset = $(window).scrollTop();
		if (yOffset >= 50) {
			setpoint = 1;
		} else if (yOffset < 50) {
			setpoint = 0;
		}

		if (setpoint >= 1) {
			$pageHeader.addClass('fixedheader');
		}
		else {
			$pageHeader.removeClass('fixedheader');
		}
	});
})
