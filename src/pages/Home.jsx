import { Grid, GridItem, Box } from "@chakra-ui/react";
import Header from "../components/Header";

import Lottie from "lottie-react";
import akash from "../assets/akash.json";

export default function Home() {
  return (
    <Grid
      minH="100vh"
      alignItems={"center"}
      justifyContent="center"
      templateColumns={{ base: "1fr", md: "1fr", lg: "1fr 1fr" }}
      columnGap="3rem"
    >
      <Box display={{ base: "none", lg: "block" }}>
        <Header />
      </Box>
      <GridItem h={{ base: "100%", lg: "50%" }} w="100%">
        <Lottie animationData={akash} loop={true} />
      </GridItem>
      <Box p={{ base: 4 }} display={{ base: "block", lg: "none" }}>
        <Header />
      </Box>
    </Grid>
  );
}
