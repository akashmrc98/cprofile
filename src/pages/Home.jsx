/* eslint-disable react/no-unknown-property */
import { Grid, GridItem, Box } from "@chakra-ui/react";
import Header from "../components/Header";

// import { Canvas } from "@react-three/fiber";
// import Model3D from "../components/Model3D";

import Lottie from "lottie-react";
import akash from "../assets/akash.json";

export default function Home() {
  return (
    <Grid
      minH="100vh"
      alignItems={"center"}
      justifyContent="center"
      templateColumns={{ base: "1fr", md: "1fr", lg: "1fr 1fr" }}
      columnGap="3rem"
    >
      <Box display={{ base: "none", lg: "block" }}>
        <Header />
      </Box>
      <GridItem h={{ base: "100%", lg: "50%" }} w="100%">
        <Lottie animationData={akash} loop={true} />
        {/* <Canvas>
          <pointLight intensity={2} />
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <Model3D />
        </Canvas> */}
      </GridItem>
      <Box p={{ base: 4 }} display={{ base: "block", lg: "none" }}>
        <Header />
      </Box>
    </Grid>
  );
}
