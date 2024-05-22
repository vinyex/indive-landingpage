import gsap from "gsap";

export const useGsap = () => {
	const section_1_animate = () => {
		gsap.fromTo(
			"#section-1-title",
			{
				opacity: 0,
				x: "-50%",
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: "#header",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);
		[1, 2, 3, 4].forEach((index) => {
			gsap.fromTo(
				`#card-grid-${index}`,
				{
					opacity: 0,
					y: "50%",
				},
				{
					opacity: 1,
					y: 0,
					duration: 1,
					delay: 0.05 * index,
					scrollTrigger: {
						trigger: "#header",
						start: "top bottom", // when the top of the element hits the bottom of the viewport
						end: "bottom top", // when the bottom of the element hits the top of the viewport
						toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
					},
				}
			);
		});
	};

	const section_2_animate = () => {
		gsap.fromTo(
			"#about-us-image",
			{
				opacity: 0,
				x: "-50%",
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: "#section-3",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);

		gsap.fromTo(
			"#about-us-text",
			{
				opacity: 0,
				y: "50%",
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: "#section-3",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);
	};

	const section_3_animate = () => {
		gsap.fromTo(
			"#section-3",
			{
				opacity: 0,
				x: "-50%",
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				delay: 0.5,
				ease: "back.out",
				scrollTrigger: {
					trigger: "#section-4",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);
	};

	const section_4_animate = () => {
		gsap.fromTo(
			"#section-4-text",
			{
				opacity: 0,
				x: "-50%",
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				delay: 0.5,
				ease: "back.out",
				scrollTrigger: {
					trigger: "#section-5",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);
	};

	const section_5_animate = () => {
		gsap.fromTo(
			"#section-5-text",
			{
				opacity: 0,
				x: "-50%",
			},
			{
				opacity: 1,
				ease: "back.inOut",
				x: 0,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: "#section-6",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);

		gsap.fromTo(
			"#section-5-image",
			{
				opacity: 0,
				x: "50%",
			},
			{
				opacity: 1,
				ease: "back.inOut",
				x: 0,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: "#section-6",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);
	};

	const section_6_animate = () => {
		gsap.fromTo(
			"#section-6-text",
			{
				opacity: 0,
				y: "50%",
			},
			{
				opacity: 1,
				ease: "back.inOut",
				y: 0,
				duration: 1.5,
				delay: 0.5,
				scrollTrigger: {
					trigger: "#section-7",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);

		gsap.fromTo(
			"#section-6-image",
			{
				opacity: 0,
				x: "100%",
			},
			{
				opacity: 1,
				// ease: "sine.inOut",
				x: 0,
				duration: 2,
				delay: 0.5,
				scrollTrigger: {
					trigger: "#section-7",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);
	};

	const section_7_animate = () => {
		gsap.fromTo(
			"#section-7",
			{
				opacity: 0,
				x: "-50%",
			},
			{
				opacity: 1,
				x: 0,
				duration: 1,
				delay: 0.5,
				ease: "back.out",
				scrollTrigger: {
					trigger: "#section-8",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);
	};

	const section_8_animate = () => {
		[1, 2, 3].forEach((index) => {
			gsap.fromTo(
				`#section-8-card-${index}`,
				{
					opacity: 0,
					y: "50%",
				},
				{
					opacity: 1,
					y: 0,
					duration: 1,
					delay: 0.05 * index,
					scrollTrigger: {
						trigger: "#section-9",
						start: "top bottom", // when the top of the element hits the bottom of the viewport
						end: "bottom top", // when the bottom of the element hits the top of the viewport
						toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
					},
				}
			);
		});
	};

	const section_9_animate = () => {
		gsap.fromTo(
			"#section-9-form",
			{
				opacity: 0,
				y: "50%",
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.5,
				ease: "back.out",
				scrollTrigger: {
					trigger: "#footer",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);

		gsap.fromTo(
			"#footer-telephone",
			{
				opacity: 0,
				y: "50%",
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.5,
				scrollTrigger: {
					trigger: "#footer",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);

		gsap.fromTo(
			"#footer-email",
			{
				opacity: 0,
				y: "50%",
			},
			{
				opacity: 1,
				y: 0,
				duration: 1.25,
				delay: 0.75,
				scrollTrigger: {
					trigger: "#footer",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);

		gsap.fromTo(
			"#footer-address",
			{
				opacity: 0,
				y: "-50%",
			},
			{
				opacity: 1,
				y: 0,
				duration: 1.5,
				delay: 1,
				scrollTrigger: {
					trigger: "#footer",
					start: "top bottom", // when the top of the element hits the bottom of the viewport
					end: "bottom top", // when the bottom of the element hits the top of the viewport
					toggleActions: "play reverse play reverse", // play on enter, do nothing on leave, do nothing on enter back, reset on leave back
				},
			}
		);
	};

	return {
		section_1_animate,
		section_2_animate,
		section_3_animate,
		section_4_animate,
		section_5_animate,
		section_6_animate,
		section_7_animate,
		section_8_animate,
		section_9_animate,
	};
};
