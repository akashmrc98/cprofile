import { Box, Container, Grid, Image } from "@chakra-ui/react";
import { colors } from "./config/colors";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Tech from "./pages/Tech";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";


import { Element } from "react-scroll";

import Akash from "./assets/akash.jpeg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function App() {
	return (
		<Box className="bg">
			<Container
				minW={{
					base: "100%",
					md: "80vw",
					lg: "70vw",
					xl: "65vw",
				}}
				backgroundPosition="center"
			>
				<Navbar />
				<Box px={{ base: 0, lg: 8, }}>
					<Home />
					{/* <Element name="tech">
						<Tech />
					</Element> */}
					<Element name="about">
						<Grid rowGap={"1rem"} columnGap="2rem" templateColumns={{ base: '1fr', lg: '4fr 1fr', xl: '3fr 1fr' }}>
							<AboutMe />
							<Box>
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true }}
									variants={{
										visible: { x: 0, opacity: 1 },
										hidden: { x: -66, opacity: 0 },
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
									<Tilt glareColor={colors.p}>
										<Image
											boxShadow={colors.shadowCard}
											borderRadius={"md"}
											maxH={{ base: "320", md: "380", lg: "440", xl: "500" }}
											src={Akash}
										/>
									</Tilt>
								</motion.div>
								<Skills />
							</Box>
						</Grid>
					</Element>
					<Element name="skill">
					</Element>
					<Element name="project">
						<Projects />
					</Element>
					<Footer />
				</Box>
			</Container>
		</Box>
	);
}

export default App;
