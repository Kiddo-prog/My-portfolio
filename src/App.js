import "./App.css";
import { Box } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro.jsx";
import Menu from "./components/Menu.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box>
      <Navigation />
      <Intro />
      <Outlet />
      <Menu />
    </Box>
  );
}

export default App;
