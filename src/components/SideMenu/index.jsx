import React, { useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("top");

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
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              <Link to="/">Home</Link>
              <DrawerCloseButton
                size={["10", "15", "20", "25"]}
                style={{ marginTop: "10px" }}
              />
            </DrawerHeader>
            <DrawerBody>
              <Box fontSize={["10", "12", "14", "16"]} my="30px">
                <Link to="/about" style={menuLink}>
                  About
                </Link>
                <Link to="/portfolio" style={menuLink}>
                  Portfolio
                </Link>{" "}
                <Link to="/contact" style={menuLink}>
                  Contact
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}

export default MobileMenu;
