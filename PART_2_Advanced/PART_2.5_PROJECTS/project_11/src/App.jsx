import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/NavBar";
import Sidebar from "./Components/Sidebar";
import Submenu from "./Components/Submenu";
// import Submenu from "./Components/Submenu";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      {/* <Submenu /> */}
      <Submenu />
    </main>
  );
};
export default App;