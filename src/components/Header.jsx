import {
	Box,
	Button,
	Divider,
	Flex,
	GridItem,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import { fonts } from "../config/fonts";
import { motion } from "framer-motion";
import { colors } from "../config/colors";

import { homeData, socialData } from "../data";

import Typewriter from "typewriter-effect";
import Tilt from 'react-parallax-tilt'

export default function Header() {
	function downloadResume() {
		const pdfUrl = "/resume.pdf";
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "akashmadduru.pdf"; // specify the filename
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	return (
		<GridItem
			display={"grid"}
			rowGap={{ base: ".5rem", md: "1rem", lg: "1.25rem" }}
		>
			<Box>
				<Heading fontFamily={fonts.reading}>Hello, {`I'm`}</Heading>
				<Heading fontSize={"xxx-large"} fontFamily={fonts.special}>
					AKASH MADDURU
				</Heading>
			</Box>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, }}
				variants={{
					visible: { scale: 1, opacity: 1 },
					hidden: { scale: 0.8, opacity: 0 },
				}}
				transition={{
					duration: .5,
					bounce: 60,
					type: "spring",
					stiffness: 80,
					damping: 10,
				}}
			>
				<Flex rowGap={".5rem"} flexDirection={"column"} alignItems={"flex-start"} justifyContent="center">
					<Heading color={colors.h} cus fontSize={{ base: 'lg', md: "xl", lg: "2xl" }} fontFamily={fonts.special}>
						{homeData.role.replace("Full Stack Engineer", "")}
					</Heading>
					<Tilt>
						<Heading
							query={`Full Stack Engineer`}
							cursor={"pointer"}
							px={'2'}
							py={'1'}
							boxShadow={colors.shadow}
							borderRadius="md"
							mx='2'
							fontFamily={fonts.reading}
							fontWeight="bold"
							fontSize={{ base: "xl", md: "2xl" }}
							color={colors.h}
						>
							<Typewriter
								options={{ loop: true, autoStart: true }}
								onInit={(typewriter) => {
									typewriter
										.typeString("Fullstack ")
										.pauseFor(1500)
										.typeString("Engineer")
										.pauseFor(3500)
										.start()
										.deleteChars(8)
										.typeString("Engineer");
								}}
							/>

						</Heading>
					</Tilt>
				</Flex>
			</motion.div>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, }}
				variants={{
					visible: { scale: 1, opacity: 1 },
					hidden: { scale: 0.8, opacity: 0 },
				}}
				transition={{
					delay: 0.11,
					duration: .5,
					bounce: 60,
					type: "spring",
					stiffness: 80,
					damping: 10,
				}}
			>

				<Text fontFamily={fonts.reading} textAlign="left">
					{homeData.description}
				</Text>
			</motion.div>
			<Divider my={{ base: 2, md: 0 }} />

			<Flex columnGap={"1rem"}>
				{socialData.map((s, i) => (
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, }}
						variants={{
							visible: { scale: 1, opacity: 1 },
							hidden: { scale: 0.8, opacity: 0 },
						}}
						transition={{
							delay: 0.11 * i,
							duration: .25,
							bounce: 60,
							type: "spring",
							stiffness: 80,
							damping: 10,
						}}
						key={i}
					>
						<Link href={s.url} target="_blank" key={i}>
							<Image _hover={{
								transform: "scale(1.1)",
							}}
								transition="all 300ms ease-in-out"
								boxShadow={colors.shadow}
								display="flex"
								alignSelf={"center"}
								justifySelf="center"
								p={1}
								borderRadius="md"
								maxW={{ base: "8", lg: "10" }}
								src={s.icon}
								key={i}
							/>
						</Link>
					</motion.div>
				))}
			</Flex>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, }}
				variants={{
					visible: { x: 0, opacity: 1 },
					hidden: { x: -66, opacity: 0 },
				}}
				transition={{
					delay: .33,
					duration: .25,
					bounce: 60,
					type: "spring",
					stiffness: 80,
					damping: 10,
				}}
			>

				<Button
					mt={{ base: 4, md: 0 }}
					fontWeight={"bold"}
					color={colors.h}
					_hover={{ bg: colors.p }}
					variant={"outline"}
					size={{ base: "sm", xl: "lg" }}
					onClick={downloadResume}
					fontFamily={fonts.reading}
				>
					Resume
				</Button>
			</motion.div>
		</GridItem >
	);
}
