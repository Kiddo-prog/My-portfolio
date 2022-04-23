import React, { useEffect } from "react";
import "./App.css";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu.jsx";
import { Outlet } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import About from "./routes/About";

function App() {
  const { colorMode, toggleColorMode } = useColorMode("dark");
  const bg = useColorModeValue("grey.500", "rgb(2,0,36)");
  const color = useColorModeValue("black", "white");

  useEffect(() => {
    const setLocalStorage = () => {
      localStorage.setItem("mode", colorMode);
      return;
    };
    setLocalStorage();
  });

  return (
    <div bgColor={bg} color={color}>
      <Navigation mode={colorMode} />
      <About />
      <Outlet />
      <Menu />
      <Button
        onClick={toggleColorMode}
        style={{ position: "fixed", bottom: "5%", left: "20px" }}
        border={colorMode === "dark" ? "1px solid #fff" : "1px solid #000"}
      >
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
}

export default App;
