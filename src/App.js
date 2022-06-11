import React from "react";
import "./App.css";
import About from "./routes/About.jsx";
import Main from "./components/Main.jsx";
import { Route, Routes } from "react-router-dom";

import AboutMe from "./routes/AboutMe";
import Portfolio from "./routes/Portfolio";
import Services from "./routes/Services";
import Testimonial from "./routes/Testimonial";
import Navigation from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navigation />
      <About />
      <Main />
        <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/service" element={<Services />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
