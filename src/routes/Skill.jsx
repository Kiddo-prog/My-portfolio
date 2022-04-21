import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/react";

function Skill() {
  return (
    <Box>
      <Flex justifyContent="center">
        <Heading
          as="h2"
          fontSize={["10", "12", "17", "21"]}
          color="white"
          letterSpacing="2px"
        >
          My Skill
        </Heading>
      </Flex>
    </Box>
  );
}

export default Skill;
