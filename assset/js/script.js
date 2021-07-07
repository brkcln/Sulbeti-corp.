var tl = anime.timeline({
	easing: "easeOutExpo",
	duration: 1000,
	delay: 1000,
	loop: false,
});

// Add children
tl.add({
	targets: ".a",
	translateX: 20,
	opacity: 1,
	delay: 1000,
})
	.add({
		targets: ".b",
		translateX: -20,
		opacity: 1,
		delay: 0,
	})
	.add({
		targets: ".c",
		translateX: 20,
		opacity: 1,
		delay: 0,
	})
	.add({
		targets: ".d",
		translateX: -20,
		opacity: 1,
		delay: 0,
	})
	.add({
		targets: ".e",
		translateX: 20,
		opacity: 1,
		delay: 0,
	});
anime({
	targets: ".hero-img",
	translateY: 20,
	translateX: 20,
	left: "33.5%",
	top: "-5%",
	easing: "easeOutCubic",
	opacity: 1,
	loop: false,
});
