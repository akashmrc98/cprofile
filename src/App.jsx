import { Box, Container } from "@chakra-ui/react";
import { colors } from "./config/colors";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Tech from "./pages/Tech";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";



import { Element } from "react-scroll";

function App() {
  return (
    <Box backgroundColor={colors.bg}>
      <Container
        minW={{
          base: "100%",
          md: "90vw",
          lg: "80vw",
          xl: "65vw",
        }}
        className="bg"
        backgroundPosition="center"
        boxShadow="dark-lg"
      >
        <Navbar />
        <Box px={{ base: 0, lg: 8, }}>
          <Home />
          <Element name="about">
            <AboutMe />
          </Element>
          <Element name="tech">
            <Tech />
          </Element>
          <Element name="skill">
            <Skills />
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
