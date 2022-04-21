import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box p={4} display={{ md: "flex" }} margin={10}>
      <Box w={{ base: "100%", md: "70%", lg: "70%" }}>
        <Heading
          fontSize={["15", "20", "30", "35"]}
          color="white"
          fontStyle="italic"
          marginBottom={3}
        >
          About Me
        </Heading>
        <Text fontSize={["8", "12", "17", "19"]} color="white" fontWeight="600">
          My name is Hussein Mubarak. I'm a software developer from Nigeria.
        </Text>
      </Box>
      <Box flexShrink="0" mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Image
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
          src="/images/aboutme.png"
          alt="my profile"
          display={{ base: "none", md: "block", lg: "block" }}
        />
      </Box>
    </Box>
  );
}
