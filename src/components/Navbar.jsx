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
				<DrawerContent bg={colors.bg} className="bg">
					<DrawerHeader>
						<Heading fontFamily={fonts.special}>{`<AKASH MADDURU/> `}</Heading>
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
										_hover={{ color: colors.bg, bg: colors.p }}
										variant={"outline"}
										size={{ base: "lg" }}
									>
										<Icon  as={n.icon} color={colors.s} />
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
							_hover={{ color: colors.bg, bg: colors.p }}
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
			boxShadow={`6px 6px 12px ${colors.bg}`}
		>
			<Box
				alignItems={"center"}
				display={"flex"}
				justifyContent="space-between"
			>
				<Heading fontFamily={fonts.special}>{`<AKASH MADDURU/> `}</Heading>
				<Flex
					alignItems={"center"}
					display={{ base: "none", lg: "flex" }}
					columnGap={"1rem"}
				>
					{navbarItems.map((n, i) => (

						<Link activeClass="active"
							to={n.url}
							spy={true}
							smooth={true}
							spyThrottle={500}
							key={i}
						>
							<Button
								display={"flex"}
								alignItems="center"
								justifyContent={"center"}
								columnGap="1rem"
								mt={{ base: 4, md: 0 }}
								fontWeight={"bold"}
								color={colors.p}
								_hover={{ color: colors.bg, bg: colors.p }}
								variant={"outline"}
								size={{ base: "sm" }}
							>
								<Icon  as={n.icon} color={colors.s} />
								{n.name}
							</Button>
						</Link>
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
	{
		name: "Technicial",
		url: "tech",
		icon: FaNewspaper 
	},
	{
		name: "Skill",
		url: "skill",
		icon: FaBook 
	},
	{
		name: "Projects",
		url: "project",
		icon: FaTasks
	}
];
