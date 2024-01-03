import { Grid, GridItem, Box, Text, Heading, Divider } from "@chakra-ui/react";

import { fonts } from "../config/fonts";
import { techMe } from "../data";

export default function Tech() {
  return (
    <Box py={12}>
      <Grid rowGap={"1rem"}>
        <Heading fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
          {techMe.heading}
        </Heading>
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
            xl: "1fr 1fr 1fr",
          }}
          display={"grid"}
          rowGap="1rem"
          columnGap={"1rem"}
          w="100%"
        >
          {techMe.content.map((content, i) => (
            <Box
              bg={`rgba(0,0,0, 0.5)`}
              boxShadow={"dark-lg"}
              p={4}
              borderRadius="md"
              key={i}
            >
              <Heading fontFamily={fonts.cursive}>{content.heading}</Heading>
              <Divider my={2} />
              <Text fontFamily={fonts.reading}>{content.description}</Text>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
}
