import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact";
import Skill from "./routes/Skill";
import theme from "./theme";
import Navigation from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import DarkMode from "./components/Color";

import { ColorModeScript } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Menu />
        <DarkMode />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
