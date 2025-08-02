import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContextProvider"; // importing the useGlobalContext hook

const SideBar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext(); // consuming the global context value

  return (
    <div
      className={`offcanvas offcanvas-start ${isSidebarOpen ? "show" : ""}`}
      // tabIndex="-1"
      style={{ visibility: "visible" }} // ensuring the sidebar is visible when open
    >
      <div className="offcanvas-header d-flex justify-content-between align-items-center">
        <h5 className="offcanvas-title">Sidebar</h5>
        <button
          type="button"
          className="btn"
          onClick={toggleSidebar} // calling the toggleSidebar function to close the sidebar
        >
          <FaTimes />
        </button>
      </div>
      <div className="offcanvas-body">
        <p>Sidebar content goes here.</p>
      </div>
    </div>
  );
};

export default SideBar;