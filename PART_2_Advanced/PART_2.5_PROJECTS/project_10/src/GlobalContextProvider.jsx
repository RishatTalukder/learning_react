import React, { createContext, useState, useContext } from "react";

export const GlobalContext = createContext(); // creating a global context object

export const useGlobalContext = () => {
  return useContext(GlobalContext); // returning the context value using useContext hook
};

const GlobalContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // state variable to manage the sidebar state
  const [isModalOpen, setIsModalOpen] = useState(false); // state variable to manage the modal state

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // toggling the sidebar state
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); // toggling the modal state
  };

  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, toggleSidebar, isModalOpen, toggleModal }}
    >
      {children} {/* rendering the children components */}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;