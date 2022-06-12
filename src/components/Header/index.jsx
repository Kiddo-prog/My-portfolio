import React from "react";
import { Flex, Heading, Box, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import DarkMode from "../utils/DarkMode";

import { HashLink } from "react-router-hash-link";

import MobileMenu from '../SideMenu'

export default function Navigation({ mode }) {
  const color = useColorModeValue("rgb(2,0,36)",  "#fff");
  const link = {
    letterSpacing: "1.5px",
    marginLeft: "1em",
    fontSize: "1.25em",
    marginRight: "1em"
  };

  return (
    <Box p={5} color={color} position={'sticky'}>
      <Flex alignItems="center" justifyContent={'space-between'}>
        <Box>
          <Heading
            fontSize={["16", "18", "21", "23"]}
            letterSpacing="2px"
            display="flex"
          >
            <HashLink smooth to="/">
              <Image src={'/images/logo.png'} alt="logo" />
            </HashLink>
          </Heading>
        </Box>
        <Box
          fontSize={["9", "10", "11", "13"]}
          display={{ base: "none", md: "block", lg: "block" }}
        >
          <HashLink smooth to="/#about" style={link}>
            About
          </HashLink>
          <HashLink smooth to="/#portfolio" style={link}>
            Projects
          </HashLink>

          <HashLink smooth to="/#contact" style={link}>
            Contact
          </HashLink>
          <DarkMode />
        </Box>
        <MobileMenu />
      </Flex>
    </Box>
  );
}
