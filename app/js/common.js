document.addEventListener('DOMContentLoaded', function() {

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
			320: {
				allowTouchMove: true
			},
			768: {
				allowTouchMove: true
			},
			1025: {
				allowTouchMove: false
			}
		}
	})

	document.querySelector('video').playbackRate = 2

})
