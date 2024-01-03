import {
  Grid,
  GridItem,
  Box,
  Text,
  Heading,
  Image,
  Divider,
  Flex,
} from "@chakra-ui/react";

import { fonts } from "../config/fonts";
import { aboutMe } from "../data";
import Akash from "../assets/akash.jpeg";
import { colors } from "../config/colors";

export default function AboutMe() {
  return (
    <Box py={12}>
      <Grid rowGap={"1rem"}>
        <Heading fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
          {aboutMe.heading}
        </Heading>
        <Text fontFamily={fonts.reading}>{aboutMe.description}</Text>
      </Grid>
      <Divider my={4}></Divider>
      <Grid
        alignItems={"center"}
        justifyContent="center"
        templateColumns={{ base: "1fr", md: "1fr", lg: "1fr 1.5fr" }}
        columnGap="3rem"
        rowGap={"2rem"}
      >
        <GridItem>
          <Image borderRadius={"md"} maxW="320" src={Akash} />
        </GridItem>
        <GridItem display={"grid"} rowGap="1rem" w="100%">
          {aboutMe.content.map((content, i) => (
            <Box key={i}>
              <Flex alignItems={"center"} columnGap="1rem">
                <Heading fontFamily={fonts.cursive}>{content.company}</Heading>
                <Text
                  fontWeight={"bold"}
                  color={colors.p}
                  fontFamily={fonts.special}
                >
                  ( {content.duration} )
                </Text>
              </Flex>
              <Text fontFamily={fonts.reading}>{content.description}</Text>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
}
