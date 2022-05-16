import React from "react";
import { Flex, Spacer, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";

import MobileMenu from "../Menu";

export default function Navigation({ mode }) {
  const bg = useColorModeValue("rgb(2,0,36)", "#fff");
  const color = useColorModeValue("#fff", "rgb(2,0,36)");
  const boxShadow = useColorModeValue(
    "2px 5px 10px rgb(2,0,36)",
    "2px 5px 10px #fff"
  );
  const link = {
    letterSpacing: "1.5px",
    marginLeft: "1em",
    fontSize: "1.25em",
  };

  return (
    <Box p={5} bgColor={bg} color={color} boxShadow={boxShadow}>
      <Flex alignItems="center">
        <Box>
          <Heading
            fontSize={["16", "18", "21", "23"]}
            letterSpacing="2px"
            display="flex"
          >
            <Link to="/">Codewithmubi</Link>
          </Heading>
        </Box>
        <Spacer />
        <Box
          fontSize={["9", "10", "11", "13"]}
          display={{ base: "none", md: "block", lg: "block" }}
        >
          <Link to="/about" style={link}>
            About
          </Link>
          <Link to="/portfolio" style={link}>
            Portfolio
          </Link>
          <Link to="/service" style={link}>
            Services
          </Link>
          {/* <Link to="/testimonial" style={link}>
            Testimonial
          </Link> */}
        </Box>
        <MobileMenu />
      </Flex>
    </Box>
  );
}
