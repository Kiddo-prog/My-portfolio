import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function ContactMe() {
  return (
    <Box id="contact" marginTop={["2em", "5em"]}>
      <Heading
        as="h2"
        textAlign="center"
        fontSize={["12px", "20px", "30px", "40px"]}
      >
        Contact Me
      </Heading>
    </Box>
  );
}

export default ContactMe;
