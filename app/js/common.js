import gsap from 'gsap/dist/gsap'
import gsap from 'gsap'
document.addEventListener('DOMContentLoaded', function() {
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
