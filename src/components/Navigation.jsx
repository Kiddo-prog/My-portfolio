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
          <Heading color="white" size="xl">
            Codewithmubi
          </Heading>
        </Box>
        <Spacer />
        <Box sm={{ display: "none" }}>
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
