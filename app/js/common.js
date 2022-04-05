document.addEventListener('DOMContentLoaded', function() {
	//custom cursor
		var cursor = document.querySelector('.cursor');
		var cursorinner = document.querySelector('.cursor2');
		var sliderLine = document.querySelectorAll('.slick-list');

		document.addEventListener('mousemove', function (e) {
			var x = e.clientX;
			var y = e.clientY;
			cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
		});

		document.addEventListener('mousemove', function (e) {
			var x = e.clientX;
			var y = e.clientY;
			cursorinner.style.left = x + 'px';
			cursorinner.style.top = y + 'px';
		});

		document.addEventListener('mousedown', function () {
			// cursor.classList.add('click');
			cursorinner.classList.add('cursorinnerhover')
			cursorinner.classList.add('active')
		});

		document.addEventListener('mouseup', function () {
			// cursor.classList.remove('click')
			cursorinner.classList.remove('cursorinnerhover')
			cursorinner.classList.remove('active')

		});

		sliderLine.forEach(item => {
			item.addEventListener('mouseover', () => {
				cursorinner.classList.add('worked');
				cursor.classList.add('worked');
			});
			item.addEventListener('mouseleave', () => {
				cursor.classList.remove('worked');
				cursorinner.classList.remove('worked');
			});
		})

	//color pulse	
	TweenMax.staggerFrom(
		".titles > div",
		0.8,
		{
			x: "-60",
			ease: Power3.easeInOut,
			opacity: "0",
		},
		2
	);
	TweenMax.staggerTo(
		".titles > div",
		0.8,
		{
			x: "60",
			ease: Power3.easeInOut,
			delay: 1.2,
			opacity: "0",
		},
		2
	);
	TweenMax.staggerFrom(
		"li",
		3,
		{
			x: "-1600",
			delay: 4.2,
			ease: Expo.easeInOut,
		},
		0.16
	);
	TweenMax.staggerTo(
		".preload",
		4,
		{
			opacity: 0,
			delay: 7,
			ease: Expo.easeInOut,
		},
		0.2
	);

	TweenMax.staggerTo(
		"li",
		2.6,
		{
			x: "1600",
			delay: 6.8,
			ease: Expo.easeInOut,
		},
		0.2
	);
	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-navigation__next',
			prevEl: '.showcase-navigation__prev'
		},
		breakpoints: {
			480: {
				allowTouchMove: true
			},
			768: {
				allowTouchMove: true
			},
			1025: {
				allowTouchMove: true
			}
		}
	})

	document.querySelector('video').playbackRate = 2

})

