import React from "react";
import "./App.css";
import About from "./routes/About.jsx";
import Main from "./components/Main.jsx";

function App() {
  // const DarkMode = useContext();

  return (
    <div>
      <About />
      <Main />
    </div>
  );
}

export default App;
