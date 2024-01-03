import {
  Grid,
  GridItem,
  Box,
  Text,
  Heading,
  Divider,
  List,
  ListItem,
  ListIcon,
  Icon,
  Link,
} from "@chakra-ui/react";

import { fonts } from "../config/fonts";
import { projects } from "../data";

import { colors } from "../config/colors";

import { SiBreaker, SiGithub } from "react-icons/si";

export default function Projects() {
  return (
    <Box py={12}>
      <Grid rowGap={"1rem"}>
        <Heading fontSize={{ base: "5xl" }} fontFamily={fonts.special}>
          Notable Projects
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
          }}
          display={"grid"}
          rowGap="1rem"
          columnGap={"1rem"}
          w="100%"
        >
          {projects.map((project, i) => (
            <Box
              boxShadow={`0px 0px 4px ${colors.fg}`}
              bg={`rgba(0,0,0, 0.5)`}
              p={4}
              borderRadius="md"
              key={i}
            >
              <Heading fontFamily={fonts.cursive}>{project.name}</Heading>
              <Divider my={2} />
              <Text fontFamily={fonts.reading}>{project.overview}</Text>
              <Divider my={2} />
              <List>
                {project.projectGoals.map((goal, j) => (
                  <ListItem fontFamily={fonts.reading} key={j}>
                    <ListIcon as={SiBreaker} color="white" />
                    {goal}
                  </ListItem>
                ))}
              </List>
              <Divider my={2} />
              <Box>
                {project.urls.map((url, s) => (
                  <Link href={url.url} key={s} target="_blank">
                    <Box
                      display={"flex"}
                      columnGap="1rem"
                      alignItems={"center"}
                      key={s}
                    >
                      <Icon as={SiGithub} />
                      <Text cursor={"pointer"}>{url.app}</Text>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
}
