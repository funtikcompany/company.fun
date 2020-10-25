$(function () {

	/*Slider */
	$('.slider__inner, .news__slider--inner').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false
	});

	// Menu

	$('.header__btn--menu').on('click', function () {
		$('.menu ul').slideToggle();
	});




	let header = $(".header"),
		introH = $("#inner").innerHeight(),
		scrollOffset = $(window).scrollTop();
	checkScroll(scrollOffset);




	// Header
	$(window).on("scroll", function () {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});
	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass("active");
		} else {
			header.removeClass("active");
		}
	}

	// Smooth scroll

	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();
		let offset = $(".header").innerHeight();
		let $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top - offset;


		// $("#nav a").removeClass("focus");
		// $this.addClass("focus");



		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);


	});














});



