import React from "react";
import { FaBars, FaRegWindowMaximize } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContextProvider"; // importing the useGlobalContext hook

const Home = () => {
  const { toggleSidebar, toggleModal } = useGlobalContext(); // consuming the global context value

  return (
    <div className="position-relative vh-100">
      {/* Top-right Sidebar Button */}
      <button
        className="btn btn-secondary position-absolute top-0 start-0 m-3"
        onClick={toggleSidebar} // calling the toggleSidebar function to open the sidebar
      >
        <FaBars /> Open Sidebar
      </button>

      {/* Centered Modal Button */}
      <div className="d-flex justify-content-center align-items-center h-100">
        <button
          className="btn btn-primary"
          onClick={toggleModal} // calling the toggleModal function to open the modal
        >
          <FaRegWindowMaximize /> Open Modal
        </button>
      </div>
    </div>
  );
};
export default Home;