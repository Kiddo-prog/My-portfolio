import React from "react";
import {
  Text,
  Box,
  Flex,
  Spacer,
  Image,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ServiceComponent() {
  const bg = useColorModeValue("rgb(2,0,36)", "gray.100");
  const color = useColorModeValue("gray.100", "rgb(2,0,36)");
  return (
    <>
      <Flex
        p="2em"
        direction={{ base: "column", md: "row", lg: "row" }}
        alignItems="center"
      >
        <Box bg={bg} p="4em 2em" borderRadius="10px" color={color} mx="40px">
          <Heading>Web Developement</Heading>
        </Box>
        <Spacer />
        <Box mt={{ base: 5, md: 0, lg: 0 }}>
          <Image
            src="/images/webdev.png"
            boxSize="400px"
            objectFit="contain"
            alt="service"
          />
        </Box>
      </Flex>

      <Flex
        p="2em"
        direction={{ base: "column", md: "row-reverse", lg: "row-reverse" }}
        alignItems="flex-start"
      >
        <Box bg={bg} p="4em 2em" borderRadius="10px" color={color}>
          <Heading>Frontend Developement</Heading>
        </Box>
        <Spacer />
        <Box mt={{ base: 5, md: 0, lg: 0 }}>
          <Image
            src="/images/frontend.png"
            alt="service"
            boxSize="400px"
            objectFit="contain"
          />
        </Box>
      </Flex>

      <Flex
        p="2em"
        direction={{ base: "column", md: "row", lg: "row" }}
        alignItems="flex-start"
      >
        <Box bg={bg} p="4em 2em" borderRadius="10px" color={color}>
          <Heading>Full-Stack Developement</Heading>
        </Box>
        <Spacer />
        <Box mt={{ base: 5, md: 0, lg: 0 }}>
          <Image
            src="/images/fullstack.png"
            alt="service"
            boxSize="400px"
            objectFit="contain"
          />
        </Box>
      </Flex>

      <Flex
        direction={{ base: "column", md: "row-reverse", lg: "row-reverse" }}
        alignItems="flex-start"
        p="2em"
      >
        <Box bg={bg} p="4em 2em" borderRadius="10px" color={color}>
          <Heading>Backend Developement</Heading>
        </Box>
        <Spacer />
        <Box mt={{ base: 5, md: 0, lg: 0 }}>
          <Image
            src="/images/backend.png"
            alt="service"
            boxSize="400px"
            objectFit="contain"
          />
        </Box>
      </Flex>
    </>
  );
}
