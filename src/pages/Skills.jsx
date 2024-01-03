import { Grid, Box, Heading, Divider } from "@chakra-ui/react";
import SkillSet from "../components/Skillset";

import { fonts } from "../config/fonts";
import { skills } from "../data";

export default function Skills() {
  return (
    <Box py={12}>
      <Grid rowGap={"1rem"}>
        <Heading fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
          Skills
        </Heading>
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
