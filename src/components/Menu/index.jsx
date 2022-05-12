import React, { useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  //   DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("top");

  const menuLink = {
    display: "block",
    fontSize: "1.5em",
    fontWeight: "600",
    marginBottom: "1em",
  };

  return (
    <>
      {" "}
      <Box display={{ base: "block", md: "none", lg: "none" }}>
        <Button
          colorScheme="blue"
          onClick={onOpen}
          style={{ position: "fixed", bottom: "5%", right: "20px" }}
        >
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
              <Box
                fontSize={["10", "12", "14", "16"]}
                marginTop={5}
                marginLeft={2}
              >
                <Link to="/portfolio" style={menuLink}>
                  Portfolio
                </Link>{" "}
                <Link to="/service" style={menuLink}>
                  Service
                </Link>
                {/* <Link to="/testimonial" style={menuLink}>
                  Testimonial
                </Link> */}
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}

export default Menu;
