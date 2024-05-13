import gsap from "./gsap.min.js";

const tl = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: "power1.out",
	},
});

// cookie container
tl.fromTo(
	".cookie-container",
	{ scale: 0 },
	{ scale: 1, ease: "elastic.out(1,0.4)", duration: 1.5 }
)
	.fromTo(
		".cookie",
		{ opacity: 0, x: -50, rotation: "-45deg" },
		{ opacity: 1, x: 0, rotation: 0 },
		"<50%"
	)
	.fromTo(".text", { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "<");

const btn = document.querySelector("button");

// cookie crumbs
tl.fromTo(
	".cookie",
	{ y: 0, rotation: "0deg" },
	{ y: -20, yoyo: true, rotation: "-20deg", repeat: -1 }
);
tl.fromTo("#crumbs", { y: 0 }, { y: -20, yoyo: true, repeat: -1 }, "<");
btn.addEventListener("click", (e) => {
	gsap.to(".cookie-container", { y: 100, opacity: 0 });
});
