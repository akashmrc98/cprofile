import {
  Box,
  Button,
  Divider,
  Flex,
  GridItem,
  Heading,
  Highlight,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { fonts } from "../config/fonts";
import { homeData, socialData } from "../data";
import { motion } from "framer-motion";

import Typewriter from "typewriter-effect";
import { colors } from "../config/colors";

export default function Header() {
  function downloadResume() {
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <GridItem
      display={"grid"}
      rowGap={{ base: ".5rem", md: "1rem", lg: "1.25rem" }}
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, }}
        variants={{
          visible: { scale: 1, opacity: 1 },
          hidden: { scale: 0.8, opacity: 0 },
        }}
        transition={{
          duration: .5,
          bounce: 60,
          type: "spring",
          stiffness: 80,
          damping: 10,
        }}
      >
        <Heading cus fontSize={{ base: '2xl' }} fontFamily={fonts.cursive}>
          <Highlight
            query={`Full Stack Engineer`}
            styles={{
              cursor: "pointer",
              px: '2', py: '1', borderRadius: "md", bg: colors.p,
              mx: '2',
              fontFamily: fonts.special,
              fontWeight: "bold",
              color: colors.bg
            }}
          >
            {homeData.role}
          </Highlight>
        </Heading>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, }}
        variants={{
          visible: { scale: 1, opacity: 1 },
          hidden: { scale: 0.8, opacity: 0 },
        }}
        transition={{
          delay: 0.11,
          duration: .5,
          bounce: 60,
          type: "spring",
          stiffness: 80,
          damping: 10,
        }}
      >

        <Text fontFamily={fonts.reading} textAlign="left">
          {homeData.description}
        </Text>
      </motion.div>
      <Divider my={{ base: 2, md: 0 }} />

      <Flex columnGap={"1rem"}>
        {socialData.map((s, i) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, }}
            variants={{
              visible: { scale: 1, opacity: 1 },
              hidden: { scale: 0.8, opacity: 0 },
            }}
            transition={{
              delay: 0.11 * i,
              duration: .25,
              bounce: 60,
              type: "spring",
              stiffness: 80,
              damping: 10,
            }}
            key={i}
          >
            <Link href={s.url} target="_blank" key={i}>
              <Image _hover={{
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
            </Link>
          </motion.div>
        ))}
      </Flex>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, }}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: -66, opacity: 0 },
        }}
        transition={{
          delay: .33,
          duration: .25,
          bounce: 60,
          type: "spring",
          stiffness: 80,
          damping: 10,
        }}
      >

        <Button
          mt={{ base: 4, md: 0 }}
          fontWeight={"bold"}
          color={colors.p}
          _hover={{ color: colors.bg, bg: colors.p }}
          variant={"outline"}
          size={{ base: "sm", xl: "lg" }}
          onClick={downloadResume}
        >
          RESUME
        </Button>
      </motion.div>
    </GridItem>
  );
}
