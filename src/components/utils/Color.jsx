import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        onClick={toggleColorMode}
        style={{ position: "fixed", bottom: "5%", left: "20px" }}
        border={colorMode === "dark" ? "1px solid #fff" : "1px solid #000"}
        bgColor={colorMode === "dark" ? "rgb(2,0,36)" : "#fff"}
      >
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </>
  );
}
