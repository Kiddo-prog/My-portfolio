import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  const color = useColorModeValue("rgb(2,0,36)", "#fff");
  const date = new Date().getFullYear();
  return (
    <>
      <Box padding={5} style={{ bottom: 0 }}>
        <Text
          letterSpacing={1}
          color={color}
          textAlign="center"
          fontSize={{base: 'sm', md: 'md', lg: 'lg'}}
          fontWeight="400"
          fontFamily={'"Public Sans", sans-serif'}
        >
          &copy;{date} Copyright CodewithMubi
        </Text>
      </Box>
    </>
  );
}
