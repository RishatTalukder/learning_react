import React from "react";
import { useAppContext } from "../context/AppContext"; // importing the useAppContext hook
import { navbarData } from "../data/navbarData"; // importing the navbar data
import { FaTimes } from "react-icons/fa"; // importing the close icon for the sidebar

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useAppContext(); // consuming the global context value

  return (
    <div
      className={`offcanvas offcanvas-end ${isSidebarOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{ visibility: isSidebarOpen ? "visible" : "hidden" }} // toggling the visibility of the sidebar
    >
      <div className="offcanvas-header d-flex justify-content-between align-items-center">
        <h5 className="offcanvas-title">Menu</h5>
        <button
          type="button"
          className="btn"
          onClick={toggleSidebar} // calling the toggleSidebar function to close the sidebar
        >
          <FaTimes />
        </button>
      </div>
      <div className="offcanvas-body">
        {navbarData.map((section, index) => (
          <div key={index} className="mb-4">
            <h6>{section.title}</h6>
            <ul className="list-group">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="list-group-item d-flex align-items-center">
                  <link.icon className="me-2" />
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;