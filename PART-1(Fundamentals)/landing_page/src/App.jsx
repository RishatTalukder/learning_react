import React from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Header, Footer, Introduction, Skills, Projects } from "./Components";
import "./styling.css";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
