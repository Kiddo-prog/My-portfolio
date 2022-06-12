import React from "react";
import Contact from "./Contact";
import Skill from "./Skill";
import Portfolio from "./Portfolio"
import AboutMe from "../routes/AboutMe";

function Main() {
  return (
    <>
        <AboutMe />
        <Portfolio />
        <Skill />
        <Contact />
    </>
  );
}

export default Main;
