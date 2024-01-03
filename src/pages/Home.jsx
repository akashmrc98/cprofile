import { Grid, GridItem, Box } from "@chakra-ui/react";
import Header from "../components/Header";

import Lottie from "lottie-react";
import akash from "../assets/akash.json";
import { motion } from "framer-motion";

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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, }}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: 66, opacity: 0 },
        }}
        transition={{
          duration: .5,
          bounce: 60,
          type: "spring",
          stiffness: 80,
          damping: 10,
        }}
      >
        <GridItem h={{ base: "100%", lg: "50%" }} w="100%">
          <Lottie animationData={akash} loop={true} />
        </GridItem>
      </motion.div>
      <Box display={{ base: "block", lg: "none" }}>
        <Header />
      </Box>
    </Grid>
  );
}
