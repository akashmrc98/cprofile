/* eslint-disable react/no-unknown-property */

import {
	Grid,
	Box,
	Heading,
	Divider,
	Text,
	Flex,
	Image,
	Link,
} from "@chakra-ui/react";

import { fonts } from "../config/fonts";
import { footerContent, socialData } from "../data";
import { colors } from "../config/colors";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<Box py={12}>
			<Grid rowGap={"1rem"}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, }}
					variants={{
						visible: { y: 0, opacity: 1 },
						hidden: { y: -66, opacity: 0 },
					}}
					transition={{
						duration: .5,
						bounce: 60,
						type: "spring",
						stiffness: 80,
						damping: 10,
					}}
				>

					<Heading color={colors.h} fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
						{footerContent.heading}
					</Heading>
				</motion.div>
			</Grid>
			<Divider my={4}></Divider>
			<Flex my={4} justifyContent={"center"} columnGap={"1rem"}>
				{socialData.map((s, i) => (
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, }}
						variants={{
							visible: { y: 0, opacity: 1 },
							hidden: { y: -66, opacity: 0 },
						}}
						transition={{
							duration: .5,
							bounce: 60,
							delay: i * .11,
							type: "spring",
							stiffness: 80,
							damping: 10,
						}}
						key={i}
					>
						<Link href={s.url} target="_blank">
							<Image
								_hover={{
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
			<Flex my={4} w={{ base: "100%", lg: "50%" }} mx="auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, }}
					variants={{
						visible: { y: 0, opacity: 1 },
						hidden: { y: -66, opacity: 0 },
					}}
					transition={{
						duration: .5,
						bounce: 60,
						type: "spring",
						stiffness: 80,
						damping: 10,
					}}
				>

					<Text textAlign={"center"} fontFamily={fonts.reading}>
						{footerContent.description}
					</Text>
				</motion.div>
			</Flex>
			<Flex my={2} justifyContent={"center"}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, }}
					variants={{
						visible: { y: 0, opacity: 1 },
						hidden: { y: -66, opacity: 0 },
					}}
					transition={{
						duration: .5,
						bounce: 60,
						type: "spring",
						stiffness: 80,
						damping: 10,
					}}
				>
					<Heading fontSize={{ base: 'sm', md: "md", lg: 'lg', xl: 'xl' }} fontFamily={fonts.reading} fontWeight="bold">
						© 2025 Akash Madduru. All Rights Reserved
					</Heading>
				</motion.div>
			</Flex>
		</Box>
	);
}
