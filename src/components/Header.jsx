import {
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { fonts } from "../config/fonts";
import { homeData, socialData } from "../data";

import QuoteC from "../assets/quote_c.svg";
import QuoteO from "../assets/quote_o.svg";

import Typewriter from "typewriter-effect";
import { colors } from "../config/colors";

export default function Header() {
  return (
    <GridItem
      display={"grid"}
      rowGap={{ base: ".5rem", md: "1rem", lg: "1.25rem" }}
      p={2}
    >
      <Box>
        <Heading>Hello, {`I'm`}</Heading>
        <Heading fontFamily={fonts.special}>
          <Typewriter
            options={{ loop: true, autoStart: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("AKASH ")
                .pauseFor(1500)
                .typeString("MADDURU")
                .pauseFor(3500)
                .start()
                .deleteChars(7)
                .typeString("MADDURU");
            }}
          />
        </Heading>
      </Box>
      <Flex>
        <Heading fontFamily={fonts.cursive}>{homeData.role}</Heading>
      </Flex>
      <Text fontFamily={fonts.reading} textAlign="left">
        {homeData.description}
      </Text>
      <Divider my={{ base: 2, md: 0 }} />

      <Flex columnGap={"1rem"}>
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
      <Box>
        <Button
          mt={{ base: 4, md: 0 }}
          fontWeight={"bold"}
          color={colors.p}
          _hover={{ color: colors.bg, bg: colors.p }}
          variant={"outline"}
          size={{ base: "sm", xl: "lg" }}
        >
          RESUME
        </Button>
      </Box>
    </GridItem>
  );
}
