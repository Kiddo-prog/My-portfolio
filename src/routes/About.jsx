import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
// import Design from "../components/Design";

export default function About() {
  return (
    <Box p={5} mx={{ base: "3em", md: "3.5em", lg: "4.5em" }} my="3em">
      {/* <Design /> */}
      <Flex>
        <Box maxW={{ base: "100%", md: "50%", lg: "60%" }}>
          <Heading
            fontSize={["17", "20", "26", "31"]}
            fontStyle="italic"
            marginBottom={3}
          >
            I'm a FullStack Developer
          </Heading>
          <Text fontSize={["14", "16", "18", "20"]} fontWeight="600">
            My name is Hussein Mubarak. Passionate about programming, love
            solving problems and most importantly, contributing to the world.
            Also, deliver more than expected.
          </Text>
          <Box>
            <Button download mt={3}>
              Resume
            </Button>
          </Box>
        </Box>
        <Spacer />
        <Box flexShrink="0" mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Image
            boxSize="250px"
            objectFit="cover"
            // borderRadius="full"
            src="/images/profile.png"
            alt="my profile"
            display={{ base: "none", md: "block", lg: "block" }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
