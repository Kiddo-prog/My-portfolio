import React from "react";
import { Flex, Spacer, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { useColorMode } from "@chakra-ui/react";

function Navigation({ mode }) {
  const link = {
    letterSpacing: "1.5px",
    marginLeft: "1em",
    fontSize: "1.5em",
  };
  return (
    <Box
      boxShadow={
        mode === "dark" ? "1px 3px 5px #fff" : "1px 3px 5px rgb(2,0,36)"
      }
      p={5}
    >
      <Flex alignItems="center">
        <Box>
          <Heading fontSize={["13", "18", "21", "24"]} display="flex">
            <Link to="/">Codewithmubi</Link>
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
