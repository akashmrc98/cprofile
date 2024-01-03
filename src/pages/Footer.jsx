/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import Model3D from "../components/Model3D";

import { Grid, Box, Heading, Divider, Text } from "@chakra-ui/react";

import { fonts } from "../config/fonts";
import { footerContent } from "../data";
import { OrbitControls } from "@react-three/drei";

export default function Footer() {
  return (
    <Box py={12}>
      <Grid rowGap={"1rem"}>
        <Heading fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
          {footerContent.heading}
        </Heading>
      </Grid>
      <Divider my={4}></Divider>
      <Text fontFamily={fonts.reading}>{footerContent.description}</Text>
      <Canvas
        style={{ height: "60vh", width: "100%" }}
        camera={{ fov: 32, near: 0.2, far: 1000, position: [0, 15, 15] }}
        shadows
        p="always"
        flat
        linear
      >
        <Model3D />
        <pointLight position={[0, 1, 1]} intensity={2} />
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <OrbitControls />
      </Canvas>
    </Box>
  );
}
