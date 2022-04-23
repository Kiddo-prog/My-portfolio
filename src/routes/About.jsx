import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Box p={5} display={{ md: "flex" }} margin={10}>
      <Box w={{ base: "100%", md: "70%", lg: "70%" }}>
        <Heading
          fontSize={["15", "20", "30", "35"]}
          fontStyle="italic"
          marginBottom={3}
        >
          About Me
        </Heading>
        <Text fontSize={["12", "14", "17", "19"]} fontWeight="600">
          My name is Hussein Mubarak. I'm a software developer from Nigeria.
        </Text>
      </Box>
      <Box flexShrink="0" mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Image
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
          src="/images/profile.jpg"
          alt="my profile"
          boxShadow={"1px 5px 10px #000, 4px -4px 10px #000"}
          display={{ base: "none", md: "block", lg: "block" }}
        />
      </Box>
    </Box>
  );
}
