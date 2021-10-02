$(function () {
	'use strict';
	// Detect scrolling
	let $pageHeader = $('#page-header');
	let yOffset = 0;
	let setpoint = 0;
	let scrollpos = 150;

	$(window).scroll(function () {
		yOffset = $(window).scrollTop();

		if (yOffset >= scrollpos) {
			setpoint = 1;
		} else {
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
