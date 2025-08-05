import React, { createContext, useState, useContext } from "react";
import { navbarData } from "../data/navbarData";

export const AppContext = createContext(); // creating a global context object

export const useAppContext = () => {
  return useContext(AppContext); // returning the context value using useContext hook
};

const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // state variable to manage the sidebar state
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // state variable to manage the submenu state
  const [submenuPosition, setSubmenuPosition] = useState({}); // state variable to manage the submenu position
  const [section, setSection] = useState({
    title: "",
    links: [],
  }); // state variable to manage the section and links for the submenu modal box

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // toggling the sidebar state
  };

  const openSubmenu = (text, position) => {
    const sectionData = navbarData.find((item) => item.title === text); // finding the section data from the navbarData
    console.log(sectionData);
    
    setSection(sectionData); // setting the section and links for the submenu modal box
    setSubmenuPosition(position); // setting the submenu position
    setIsSubmenuOpen(true); // opening the submenu modal box
  };  

  const closeSubmenu = () => {
    setIsSubmenuOpen(false); // closing the submenu modal box
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        submenuPosition,
        section, // passing the section and links for the submenu modal box
      }}
    >
      {children} {/* rendering the children components */}
    </AppContext.Provider>
  );
};
export default AppContextProvider;