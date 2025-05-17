import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@chakra-ui/react";
import { colors } from "../config/colors";
import { GiSevenPointedStar } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

export default function MovingBox() {
	useLayoutEffect(() => {
		const box = document.querySelector(".moving-box");
		const container = document.querySelector(".scroll-container");
		if (!box || !container) return;

		// Infinite smooth spin
		gsap.to(box, {
			rotation: "+=360",
			repeat: -1,
			duration: 1,
			ease: "linear",
		});

		// Scroll triggered vertical + horizontal motion
		gsap.to(box, {
			ease: "none",
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: "bottom bottom",
				scrub: true,
			},
			y: "100vh",
		});
	}, []);

	return (
		<div
			className="moving-box"
			style={{
				position: "fixed",
				top: 0,
				left: "10%",
				transform: "translateX(-200%)",
				borderRadius: "20px",
				zIndex: 10,
			}}
		>
			<Icon h={32} w={32} color={colors.h} as={GiSevenPointedStar} />
		</div>
	);
}
