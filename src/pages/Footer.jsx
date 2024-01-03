/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import Model3D from "../components/Model3D";

import {
  Grid,
  Box,
  Heading,
  Divider,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

import { fonts } from "../config/fonts";
import { footerContent, socialData } from "../data";
import { colors } from "../config/colors";

export default function Footer() {
  return (
    <Box py={12}>
      <Grid rowGap={"1rem"}>
        <Heading fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
          {footerContent.heading}
        </Heading>
      </Grid>
      <Divider my={4}></Divider>
      <Flex my={4} justifyContent={"center"} columnGap={"1rem"}>
        {socialData.map((s, i) => (
          <Image
            _hover={{
              transform: "scale(1.1)",
            }}
            transition="all 300ms ease-in-out"
            bg={colors.p}
            display="flex"
            alignSelf={"center"}
            justifySelf="center"
            p={1}
            borderRadius="md"
            maxW={{ base: "8", lg: "10" }}
            src={s.icon}
            key={i}
          />
        ))}
      </Flex>
      <Flex my={4} w={{ base: "100%", lg: "50%" }} mx="auto">
        <Text textAlign={"center"} fontFamily={fonts.reading}>
          {footerContent.description}
        </Text>
      </Flex>
      <Canvas
        style={{
          backgroundColor: colors.bg,
          borderRadius: "1rem",
          boxShadow: `0px 0px 4px ${colors.fg}`,
          margin: "2rem 0",
          height: "60vh",
          width: "100%",
          cursor: "pointer",
        }}
        camera={{ fov: 35, near: 0.2, far: 1000, position: [15, 0, 40] }}
        shadows
        p="demand"
        flat
        linear
      >
        <Model3D />
        <pointLight intensity={1} />
        <ambientLight intensity={1} />
        <directionalLight position={[24, 32, 10]} />
      </Canvas>
      <Divider />
      <Flex my={2} justifyContent={"flex-end"}>
        <Text fontFamily={fonts.special} fontWeight="bold">
          Designed & Build by @akashmadduru
        </Text>
      </Flex>
    </Box>
  );
}
