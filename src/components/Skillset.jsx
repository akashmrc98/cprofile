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

export default function SkillSet(props) {
  return (
    <Grid>
      <Heading fontFamily={fonts.cursive}>{props.name}</Heading>
      <Divider mt={4} mb={2} />
      <GridItem
        display={"grid"}
        gridTemplateColumns={{ base: "1fr 1fr", md: "1fr" }}
      >
        {props.skills.map((language, i) => (
          <Box
            bg={`rgba(0,0,0, 0.5)`}
            boxShadow={`0px 0px 4px ${colors.fg}`}
            m={4}
            display={"flex"}
            olumnGap={"1rem"}
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
        ))}
      </GridItem>
    </Grid>
  );
}
