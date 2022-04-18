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

function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  const menuLink = {
    color: "#fff",
    fontSize: "1.5em",
    fontWeight: "600",
    marginBottom: "2em",
  };

  return (
    <>
      {" "}
      <Box>
        <Button
          colorScheme="blue"
          onClick={onOpen}
          style={{ position: "fixed", bottom: "5%", right: "20px" }}
        >
          +
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" color="white">
              Menu
              <DrawerCloseButton size="xl" style={{ marginTop: "10px" }} />
            </DrawerHeader>
            <DrawerBody>
              <Box>
                <Link to="/skill" style={menuLink}>
                  Skill
                </Link>
              </Box>
              <Box>
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

export default Menu;
