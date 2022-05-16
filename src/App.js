import React from "react";
import "./App.css";
import About from "./routes/About.jsx";
import Main from "./components/Main.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <About />
      <Outlet />
      <Main />
    </div>
  );
}

export default App;
