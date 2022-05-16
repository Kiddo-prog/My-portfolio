import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Navigation from "./components/Header";
import DarkMode from "./components/utils/Color.jsx";
import Footer from "./components/Footer";
import Services from "./routes/Services";
import Testimonial from "./routes/Testimonial";
import Portfolio from "./routes/Portfolio";
import AboutMe from "./routes/AboutMe";

import { ColorModeScript } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/service" element={<Services />} />
          </Route>
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <DarkMode />
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
