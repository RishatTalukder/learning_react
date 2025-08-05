import React from "react";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../context/AppContext"; // importing the useAppContext hook
import { navbarData } from "../data/navbarData"; // importing the navbar data

const Navbar = () => {
  const { toggleSidebar, openSubmenu, closeSubmenu } = useAppContext(); // consuming the global context value
  
  const handleMouseEnter = (e) =>{
    const section = e.target.textContent; // getting the section title from the link
    const linkPosition = e.target.getBoundingClientRect(); // getting the position of the link

    const center = (linkPosition.left + linkPosition.right) / 2; // calculating the center of the link
    const bottom = linkPosition.bottom- 3; // getting the bottom position of the link
    console.log("Mouse entered section:", section, "Position:", linkPosition);
    
    openSubmenu(section, { center, bottom }); // setting the submenu position and opening the submenu modal box
  }
  const handleMouseLeave = () => {
    console.log("Mouse left section");
    closeSubmenu(); // closing the submenu modal box
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Left section: logo + desktop links */}
        <div className="d-flex align-items-center">
          <h4 className="text-white fw-bold mb-0 me-4">E-COMMERCE</h4>

          {/* Desktop nav links - visible on lg+ screens */}
          <div className="d-none d-lg-block">
            <ul className="navbar-nav flex-row">
              {navbarData.map((section, index) => (
                <li
                  key={index}
                  className="nav-item mx-2"
                  onMouseEnter={handleMouseEnter} // calling handleMouseEnter function when the user hovers over a link
                  onMouseLeave={handleMouseLeave} // calling handleMouseLeave function when the user leaves the link
                >
                  <a className="nav-link text-white" href="#">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar toggle (visible on small screens) */}
        <button className="btn btn-dark d-lg-none" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;