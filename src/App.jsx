import { Box, Container } from "@chakra-ui/react";
import { colors } from "./config/colors";
import Home from "./pages/Home";
import BG from "./assets/bg.svg";
import AboutMe from "./pages/AboutMe";
import Tech from "./pages/Tech";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

function App() {
  return (
    <Box backgroundColor={colors.bg}>
      <Container
        minW={{
          base: "100vw",
          md: "90vw",
          lg: "80vw",
          xl: "75vw",
        }}
        backgroundImage={BG}
        backgroundPosition="center"
        backgroundRepeat={"no-repeat"}
        backgroundSize="cover"
        boxShadow="dark-lg"
        px={{ base: 4, lg: 8, xl: 12 }}
      >
        <Home />
        <AboutMe />
        <Tech />
        <Skills />
        <Projects />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
