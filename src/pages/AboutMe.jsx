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
import { colors } from "../config/colors";
import { motion } from "framer-motion";

import Akash from "../assets/akash.jpeg";

export default function AboutMe() {
  return (
    <Box px={2} py={12}>
      <Grid rowGap={"1rem"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 66, opacity: 0 },
          }}
          transition={{
            duration: .5,
            bounce: 60,
            type: "spring",
            stiffness: 80,
            damping: 10,
          }}
        >
          <Heading fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
            {aboutMe.heading}
          </Heading>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 66, opacity: 0 },
          }}
          transition={{
            delay: 0.33,
            duration: .5,
            bounce: 60,
            type: "spring",
            stiffness: 80,
            damping: 10,
          }}
        >

          <Text fontFamily={fonts.reading}>{aboutMe.description}</Text>
        </motion.div>
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -66, opacity: 0 },
            }}
            transition={{
              delay: 0.33,
              duration: .5,
              bounce: 60,
              type: "spring",
              stiffness: 80,
              damping: 10,
            }}
          >

            <Image
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              borderRadius={"md"}
              maxW="320"
              src={Akash}
            />
          </motion.div>


        </GridItem>
        <GridItem display={"grid"} rowGap="1rem" w="100%">
          {aboutMe.content.map((content, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, }}
              variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: 66, opacity: 0 },
              }}
              transition={{
                delay: 0.33 * i,
                duration: .5,
                bounce: 60,
                type: "spring",
                stiffness: 80,
                damping: 10,
              }}
            >

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
            </motion.div>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
}
