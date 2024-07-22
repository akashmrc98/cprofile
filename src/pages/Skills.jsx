import { Grid, Box, Heading, Divider } from "@chakra-ui/react";
import SkillSet from "../components/Skillset";

import { fonts } from "../config/fonts";
import { skills } from "../data";
import { motion } from "framer-motion";
import { colors } from "../config/colors";

export default function Skills() {
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
            duration: .5,
            bounce: 60,
            type: "spring",
            stiffness: 80,
            damping: 10,
          }}
        >
          <Heading color={colors.h} fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
            Skills
          </Heading>
        </motion.div>
      </Grid>
      <Divider my={4}></Divider>
      <Grid
        rowGap={"2rem"}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr",
          lg: "1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
      >
        <SkillSet skills={skills.languages} name={"Languages"} />
        <SkillSet skills={skills.frontend} name={"Frontend"} />
        <SkillSet skills={skills.backend} name={"Backend"} />
        <SkillSet skills={skills.tools} name={"Tools"} />
      </Grid>
    </Box>
  );
}
