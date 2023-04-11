import React from "react";
import About from "./components/About/About";
import { Box } from "@mui/material";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Test from "./components/About/Hello";
import "./App.css";

function App() {
  return (
    <Box className="App">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
