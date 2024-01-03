/* eslint-disable react/prop-types */
import { GridItem, Heading, Box, Text, Icon, Divider } from "@chakra-ui/react";
import { colors } from "../config/colors";
import { fonts } from "../config/fonts";

export default function SkillSet(props) {
  return (
    <GridItem>
      <Heading fontFamily={fonts.cursive}>{props.name}</Heading>
      <Divider mt={4} mb={2} />
      {props.skills.map((language, i) => (
        <Box
          bg={`rgba(0,0,0, 0.5)`}
          boxShadow={`0px 0px 4px ${colors.fg}`}
          m={4}
          display={"flex"}
          columnGap={"1rem"}
          key={i}
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
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={"bold"}
            textAlign={"center"}
            fontFamily={fonts.reading}
          >
            {language.name}{" "}
          </Text>
        </Box>
      ))}
    </GridItem>
  );
}
