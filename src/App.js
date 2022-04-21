import "./App.css";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro.jsx";
import Menu from "./components/Menu.jsx";
import { Outlet } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import About from "./routes/About";

function App() {
  const { colorMode, toggleColorMode } = useColorMode("dark");
  const bg = useColorModeValue("grey.500", "rgb(2,0,36)");
  const color = useColorModeValue("black", "white");
  return (
    <Box bgColor={bg} color={color}>
      <Navigation />
      {/* <Intro /> */}
      <About />
      <Outlet />
      <Menu />
      <Button
        onClick={toggleColorMode}
        style={{ position: "fixed", bottom: "5%", left: "20px" }}
      >
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Box>
  );
}

export default App;
