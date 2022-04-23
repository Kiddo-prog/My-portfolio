import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import Portfolio from "../components/Portfolio";

function Skill() {
  return (
    <Box id="skill" marginTop={["2em", "5em"]}>
      <Heading
        as="h2"
        fontSize={["16px", "19px", "27px", "35px"]}
        marginBottom={["1em", "0.5em"]}
        letterSpacing="2px"
        textAlign="center"
      >
        My Skill
      </Heading>
      <Text textAlign="center" fontSize={["12px", "17px", "25px", "29px"]}>
        Check out my portfolio to see my previous projects
      </Text>
      <Flex justifyContent="center">
        <Portfolio />
      </Flex>
    </Box>
  );
}

export default Skill;
