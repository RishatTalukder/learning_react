import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link> 
        </li>
      </ul>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} /> 
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
} 
export default App;
