import {
	Grid,
	GridItem,
	Box,
	Text,
	Heading,
	Divider,
	List,
	ListItem,
	ListIcon,
	Icon,
	Link,
} from "@chakra-ui/react";

import { projects } from "../data";
import { motion } from "framer-motion";
import { fonts } from "../config/fonts";
import { colors } from '../config/colors'
import { SiGithub } from "react-icons/si";
import { FaRegDotCircle } from "react-icons/fa";


export default function Projects() {
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
						Notable Projects
					</Heading>
				</motion.div>
			</Grid>
			<Divider my={4}></Divider>
			<Grid
				alignItems={"center"}
				justifyContent="center"
				columnGap="3rem"
				rowGap={"2rem"}
			>
				<GridItem
					gridTemplateColumns={{
						base: "1fr",
						lg: "1fr 1fr"
					}}
					display={"grid"}
					rowGap="1rem"
					columnGap={"1rem"}
					w="100%"
				>
					{projects.map((project, i) => (
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
								delay: i * .33,
								bounce: 60,
								type: "spring",
								stiffness: 80,
								damping: 10,
							}}
							key={i}
						>
							<Box
								key={i}
							>
								<Heading color={colors.h} my={2} fontFamily={fonts.cursive}>{project.name}</Heading>
								<Box p={3} borderRadius="md" boxShadow={`0px 0px 4px ${colors.p}`}>
									<Text
										fontSize={{ base: "xs", md: "sm", lg: "md" }}
										fontFamily={fonts.reading}>{project.overview}</Text>
									<Divider my={2} />
									<List>
										{project.projectGoals.map((goal, j) => (
											<ListItem fontSize={{ base: "xs", md: "sm", }} fontFamily={fonts.reading} key={j}>
												<ListIcon as={FaRegDotCircle} color="white" />
												{goal}
											</ListItem>
										))}
									</List>
									<Divider my={2} />
									<Box>
										{project.urls.map((url, s) => (
											<Link href={url.url} key={s} target="_blank">
												<Box
													display={"flex"}
													columnGap="1rem"
													alignItems={"center"}
													key={s}
												>
													<Icon as={SiGithub} />
													<Text cursor={"pointer"}>{url.app}</Text>
												</Box>
											</Link>
										))}
									</Box>
								</Box>
							</Box>
						</motion.div>
					))}
				</GridItem>
			</Grid>
		</Box>
	);
}
