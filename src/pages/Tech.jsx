import { Grid, GridItem, Box, Text, Heading, Divider } from "@chakra-ui/react";

import { fonts } from "../config/fonts";
import { techMe } from "../data";
import { motion } from "framer-motion";
import { colors } from "../config/colors";

export default function Tech() {
  return (
    <Box py={12}>
      <Grid rowGap={"1rem"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, }}
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: -66, opacity: 0 },
          }}
          transition={{
            delay: .33,
            duration: .5,
            bounce: 60,
            type: "spring",
            stiffness: 80,
            damping: 10,
          }}
        >

          <Heading fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
            {techMe.heading}
          </Heading>
        </motion.div>
      </Grid>
      <Divider my={4}></Divider>
      <Grid
        alignItems={"center"}
        justifyContent="center"
        columnGap="3rem"
        rowGap={"2rem"}
      >
        <GridItem
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr",
            lg: "1fr 1fr",
          }}
          display={"grid"}
          rowGap="1rem"
          columnGap={"1rem"}
          w="100%"
        >
          {techMe.content.map((content, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -66, opacity: 0 },
              }}
              transition={{
                delay: .11 * i,
                duration: .5,
                bounce: 60,
                type: "spring",
                stiffness: 80,
                damping: 10,
              }}
            >
              <Box
                bg={`rgba(0,0,0, 0.5)`}
                borderRadius="md"
                boxShadow={`0px 0px 2px ${colors.s}`}
                p={3}
                h="100%"
                key={i}
              >
                <Heading fontFamily={fonts.cursive}>{content.heading}</Heading>
                <Divider my={2} />
                <Text fontFamily={fonts.reading}>{content.description}</Text>
              </Box>
            </motion.div>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
}
