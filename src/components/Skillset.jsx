/* eslint-disable react/prop-types */
import {
  GridItem,
  Heading,
  Box,
  Text,
  Icon,
  Divider,
  Grid,
} from "@chakra-ui/react";
import { colors } from "../config/colors";
import { fonts } from "../config/fonts";
import { motion } from "framer-motion";

export default function SkillSet(props) {
  return (
    <Grid>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -66, opacity: 0 },
        }}
        transition={{
          duration: .25,
          bounce: 60,
          type: "spring",
          stiffness: 80,
          damping: 10,
        }}
      >
        <Heading fontFamily={fonts.cursive}>{props.name}</Heading>
      </motion.div>
      <Divider mt={4} mb={2} />
      <GridItem
        display={"grid"}
        gridTemplateColumns={{ base: "1fr 1fr", md: "1fr" }}
      >
        {props.skills.map((language, i) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: 66, opacity: 0 },
            }}
            transition={{
              duration: .25,
              delay: i * .11,
              bounce: 60,
              type: "spring",
              stiffness: 80,
              damping: 10,
            }}
            key={i}>
            <Box bg={`rgba(0,0,0, 0.5)`}
              boxShadow={`0px 0px 4px ${colors.fg}`}
              m={2}
              display={"flex"}
              key={i}
              columnGap="1rem"
              alignItems="center"
              justifyContent={"flex-start"}
              borderRadius="md"
              p={2}
              cursor="pointer"
              _hover={{
                transform: `scale(1.1) translateY(2px) translateX(2px)`,
              }}
              transition={`all 400ms ease-in-out`}
            >
              <Icon h={6} w={6} as={language.icon} />
              <Text textAlign={"center"} fontFamily={fonts.reading}>
                {language.name}{" "}
              </Text>
            </Box>
          </motion.div>
        ))}
      </GridItem>
    </Grid>
  );
}
