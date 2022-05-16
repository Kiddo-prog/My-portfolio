import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue, Button, Flex, Spacer } from "@chakra-ui/react";
// import { ChevronUpIcon } from "@chakra-ui/icons";

export default function Footer() {
  const bg = useColorModeValue("rgb(2,0,36)", "#fff");
  const color = useColorModeValue("#fff", "rgb(2,0,36)");
  const border = useColorModeValue("#fff", "rgb(2,0,36)");
  const date = new Date().getFullYear();
  return (
    <>
      <Box bgColor={bg} padding={5} style={{ bottom: 0 }}>
        <Text
          letterSpacing={1}
          color={color}
          ml={["1em", "5em"]}
          textAlign="center"
        >
          &copy;{date} Copyright CodewithMubi
        </Text>
      </Box>
    </>
  );
}
