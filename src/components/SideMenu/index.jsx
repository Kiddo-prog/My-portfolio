import React, { useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import DarkMode from "../utils/DarkMode";

import { HashLink } from "react-router-hash-link";

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuLink = {
    display: "block",
    fontSize: "1.8em",
    fontWeight: "600",
    marginBottom: "1em",
  };

  return (
    <>
      {" "}
      <Box display={{ base: "block", md: "none", lg: "none" }}>
        <Button colorScheme="blue" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
        <Drawer 
          placement="right" 
          onClose={onClose} 
          isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <HashLink smooth to="/">Home</HashLink>
              <DrawerCloseButton
                size={["10", "15", "20", "25"]}
                style={{ marginTop: "10px" }}
              />
            </DrawerHeader>
            <DrawerBody>
              <Box fontSize={["10", "12", "14", "16"]} my="30px">
                <HashLink smooth to="/#about" style={menuLink}>
                  About
                </HashLink>
                <HashLink smooth to="/#portfolio" style={menuLink}>
                  Portfolio
                </HashLink>{" "}
                <HashLink smooth to="/#contact" style={menuLink}>
                  Contact
                </HashLink>
                <DarkMode />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}

export default MobileMenu;
