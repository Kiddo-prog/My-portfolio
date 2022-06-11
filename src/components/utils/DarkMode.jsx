import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        onClick={toggleColorMode}
        // bgColor={colorMode === "dark" ? "rgb(2,0,36)" : "#fff"}
        outline={'none'}
        border={'none'}
        _hover={{bgColor: 'none'}}
      >
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </>
  );
}
