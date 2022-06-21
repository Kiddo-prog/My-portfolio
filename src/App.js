import React, { useEffect } from "react";
import "./App.css";
import About from "./routes/About.jsx";
import Main from "./components/Main.jsx";
import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Header";
import AboutMe from "./routes/AboutMe";
import Portfolio from "./routes/Portfolio";
import Services from "./routes/Services";
import Testimonial from "./routes/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skill"

import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {

  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <Navigation />
      <About />
      <AboutMe />
      <Portfolio />
      <Skill />
      <Contact />
      {/* <Main /> */}
        <Routes>
            <Route path="#about" element={<AboutMe />} />
            <Route path="#portfolio" element={<Portfolio />} />
            <Route path="#contact" element={<Contact />} />
            <Route path="/service" element={<Services />} />
            <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
