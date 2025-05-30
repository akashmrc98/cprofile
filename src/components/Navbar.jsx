import {
	Box,
	Button,
	Flex,
	GridItem,
	Heading,
	Icon,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
	Grid,
} from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { useRef } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { colors } from "../config/colors";
import { fonts } from "../config/fonts";

import { FaTasks, FaNewspaper, FaUser, FaBook } from "react-icons/fa";


export default function Navbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	function Sidebar() {
		const btnRef = useRef();
		return (
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClick={onOpen}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent className="bg">
					<DrawerHeader>
						<Heading color={colors.h} fontFamily={fonts.special}>{`<AKASH MADDURU/> `}</Heading>
					</DrawerHeader>

					<DrawerBody>
						<Grid
							my={12}
							justifyContent="center"
							alignItems={"center"}
							rowGap="3rem"
						>
							{navbarItems.map((n, i) => (
								<Link activeClass="active"
									key={i}
									to={n.url}
									spy={true}
									smooth={true}
									onClick={onClose}
									style={{ fontFamily: fonts.reading }}
								>
									<Button

										w="100%"
										display={"flex"}
										alignItems="center"
										justifyContent={"space-between"}
										columnGap="1rem"
										mt={{ base: 4, md: 0 }}
										fontWeight={"bold"}
										color={colors.p}
										_hover={{ color: colors.h, bg: colors.p }}
										variant={"outline"}
										size={{ base: "lg" }}
									>
										<Icon as={n.icon} color={colors.h} />
										{n.name}

									</Button>
								</Link>
							))}
						</Grid>
					</DrawerBody>

					<DrawerFooter>
						<Button

							mt={{ base: 4, md: 0 }}
							fontWeight={"bold"}
							color={colors.p}
							_hover={{ color: colors.h, bg: colors.p }}
							variant={"outline"}
							size={{ base: "sm" }}
							onClick={onClose}
						>
							Close
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<GridItem
			display={"grid"}
			rowGap={{ base: ".5rem", md: "1rem", lg: "1.25rem" }}
			py={4}
			minH="10vh"
		>
			<Box
				alignItems={"center"}
				display={"flex"}
				justifyContent="space-between"
			>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, }}
					variants={{
						visible: { scale: 1 },
						hidden: { scale: 0.66 },
					}}

					transition={{
						duration: .5,
						bounce: 60,
						type: "spring",
						stiffness: 80,
						damping: 10,
					}}
				>
					<Heading color={colors.h} fontFamily={fonts.special}>{`<AKASH MADDURU/> `}</Heading>
				</motion.div>
				<Flex
					alignItems={"center"}
					display={{ base: "none", lg: "flex" }}
					columnGap={"1rem"}
				>
					{navbarItems.map((n, i) => (
						<motion.div
							key={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, }}
							variants={{
								visible: { scale: 1 },
								hidden: { scale: 0.66 },
							}}
							transition={{
								delay: .11 * i,
								duration: .5,
								bounce: 60,
								type: "spring",
								stiffness: 80,
								damping: 10,
							}}
						>
							<Link activeClass="active"
								to={n.url}
								spy={true}
								smooth={true}
								spyThrottle={500}
								style={{ fontFamily: fonts.reading }}
							>
								<Button
									display={"flex"}
									alignItems="center"
									justifyContent={"center"}
									columnGap="1rem"
									mt={{ base: 4, md: 0 }}
									fontWeight={"bold"}
									color={colors.p}
									_hover={{ color: colors.h, bg: colors.p }}
									variant={"outline"}
									size={{ base: "sm" }}
								>
									<Icon as={n.icon} color={colors.h} />
									{n.name}
								</Button>
							</Link>
						</motion.div>
					))}
				</Flex>

				<Flex display={{ base: "flex", lg: "none" }}>
					<Icon
						cursor={"pointer"}
						h={8}
						w={8}
						as={RiMenuFoldLine}
						color="white"
						onClick={onOpen}
					/>
				</Flex>
				<Sidebar />
			</Box>
		</GridItem>
	);
}

const navbarItems = [
	{
		url: "about",
		name: "About",
		icon: FaUser
	},
	// {
	// 	name: "Technicial",
	// 	url: "tech",
	// 	icon: FaNewspaper
	// },
	// {
	// 	name: "Skill",
	// 	url: "skill",
	// 	icon: FaBook
	// },
	{
		name: "Projects",
		url: "project",
		icon: FaTasks
	}
];
