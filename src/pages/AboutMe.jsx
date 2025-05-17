import {
	Grid,
	GridItem,
	Box,
	Text,
	Heading,
	Image,
	Divider,
	Flex,
	List,
	ListItem,
	ListIcon,
} from "@chakra-ui/react";

import { fonts } from "../config/fonts";
import { aboutMe } from "../data";
import { colors } from "../config/colors";
import { motion } from "framer-motion";

export default function AboutMe() {
	return (
		<Box py={12}>
			<Grid rowGap={"1rem"}>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { y: 0, opacity: 1 },
						hidden: { y: 66, opacity: 0 },
					}}
					transition={{
						duration: 0.5,
						bounce: 60,
						type: "spring",
						stiffness: 80,
						damping: 10,
					}}
				>
					<Heading color={colors.h} fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
						{aboutMe.heading}
					</Heading>
				</motion.div>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { y: 0, opacity: 1 },
						hidden: { y: 66, opacity: 0 },
					}}
					transition={{
						delay: 0.33,
						duration: 0.5,
						bounce: 60,
						type: "spring",
						stiffness: 80,
						damping: 10,
					}}
				>
					<Text fontFamily={fonts.reading}>{aboutMe.description}</Text>
				</motion.div>
			</Grid>
			<Divider my={4}></Divider>
			<Grid
				alignItems={"center"}
				justifyContent="center"
				// templateColumns={{ base: "1fr", md: "1fr", lg: "1fr 1.5fr" }}
				columnGap="3rem"
				rowGap={"2rem"}
			>
				<GridItem
					display={"flex"}
					justifyContent="center"
					alignItems={"center"}
				>

				</GridItem>
				<GridItem display={"grid"} rowGap="1rem" w="100%">
					{aboutMe.content.map((content, i) => (
						<motion.div
							key={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={{
								visible: { x: 0, opacity: 1 },
								hidden: { x: 66, opacity: 0 },
							}}
							transition={{
								delay: 0.33 * i,
								duration: 0.5,
								bounce: 60,
								type: "spring",
								stiffness: 80,
								damping: 10,
							}}
						>
							<Box key={i}>
								<Flex alignItems={"center"} columnGap="1rem">
									<Box>
										<Heading color={colors.h} fontFamily={fonts.special}>
											{content.company}
										</Heading>
										<Heading color={colors.p} fontFamily={fonts.cursive}>
											{content.role}
										</Heading>
										<Text
											fontWeight={"bold"}
											color={colors.s}
											fontFamily={fonts.reading}
										>
											( {content.duration} )
										</Text>
									</Box>
								</Flex>
								<Text fontFamily={fonts.reading}>{content.description}</Text>
								<Box
									_hover={{
										transform: `translateY(-55px) `,
									}}
									transition={`all 300ms ease-in-out`}
									boxShadow={colors.shadowCard}
									borderRadius={"lg"}
									margin={".5rem 0"}
									padding="1rem"
									// bg={"white"}
									className="card_bg"
								>
									<List>
										{content.highlights.map((highlight) =>
											<ListItem
												textAlign={"left"}
												display={"inline"}
												fontFamily={fonts.reading}>
												{highlight}
											</ListItem>
										)}
									</List>
								</Box>
							</Box>
						</motion.div>
					))}
				</GridItem>
			</Grid>
		</Box >
	);
}
