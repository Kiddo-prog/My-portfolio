import React from "react";
import { Flex, Spacer, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navigation() {
  const link = {
    color: "#fff",
    letterSpacing: "1.5px",
    marginLeft: "1em",
    fontSize: "1.5em",
  };
  return (
    <Box m="5">
      <Flex alignItems="center">
        <Box>
          <Heading color="white" fontSize={["10", "12", "17", "21"]}>
            Codewithmubi
          </Heading>
        </Box>
        <Spacer />
        <Box
          fontSize={["9", "10", "12", "15"]}
          display={{ base: "none", md: "block", lg: "block" }}
        >
          <Link to="/skill" style={link}>
            Skill
          </Link>
          <Link to="/contact" style={link}>
            Contact
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navigation;
