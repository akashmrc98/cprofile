import { Box, Button, Flex, GridItem, Heading } from "@chakra-ui/react";
import { colors } from "../config/colors";
import { fonts } from "../config/fonts";

export default function Navbar() {
  return (
    <GridItem
      display={"grid"}
      rowGap={{ base: ".5rem", md: "1rem", lg: "1.25rem" }}
      py={4}
      minH="10vh"
      boxShadow={`6px 6px 12px ${colors.bg}`}
    >
      <Box display={"flex"} justifyContent="space-between">
        <Heading fontFamily={fonts.special}>{`<AKASH MADDURU/> `}</Heading>
        <Flex columnGap={"1rem"}>
          {navbarItems.map((n, i) => (
            <Button
              key={i}
              mt={{ base: 4, md: 0 }}
              fontWeight={"bold"}
              color={colors.p}
              _hover={{ color: colors.bg, bg: colors.p }}
              variant={"outline"}
              size={{ base: "sm" }}
            >
              {n}
            </Button>
          ))}
        </Flex>
      </Box>
    </GridItem>
  );
}

const navbarItems = ["About", "Technicial", "Skill"];
