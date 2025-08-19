import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="profile" element={<Profile />} />{/* Nested route for Profile */}
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
