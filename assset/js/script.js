anime({
	targets: ".buble",
	translateX: "-10",
	duration: 1700,
	opacity: [0, 1],
	delay: 750,
	easing: "easeOutQuint",
	loop: false, // increase delay by 100ms for each elements.
});
anime({
	targets: ".buble2",
	translateX: "10",
	duration: 1700,
	delay: 1750,
	opacity: [0, 1],
	easing: "easeOutQuint",
	loop: false, // increase delay by 100ms for each elements.
});
anime({
	targets: ".buble3",
	translateX: "-10",
	duration: 1700,
	delay: 2750,
	opacity: [0, 1],
	easing: "easeOutQuint",
	loop: false, // increase delay by 100ms for each elements.
});
anime({
	targets: ".bubble-speaker",
	translateX: 5,
	duration: 2000,
	loop: false,
	opacity: [0, 1],
	easing: "easeOutQuint",
	// increase delay by 100ms for each elements.
});
anime({
	targets: ".feature-second",
	translateX: "-5",
	duration: 1800,
	opacity: [0, 1],
	delay: 1750,
	easing: "easeOutQuint",
	loop: false, // increase delay by 100ms for each elements.
});
anime({
	targets: ".feature-first",
	translateX: "-5",
	duration: 1800,
	opacity: [0, 1],
	delay: 750,
	easing: "easeOutQuint",
	loop: false, // increase delay by 100ms for each elements.
});
anime({
	targets: ".feature-last",
	translateX: "-5",
	duration: 1800,
	opacity: [0, 1],
	delay: 2750,
	easing: "easeOutQuint",
	loop: false, // increase delay by 100ms for each elements.
});

function myFunction() {
	let x = document.getElementById("nav-flex");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
