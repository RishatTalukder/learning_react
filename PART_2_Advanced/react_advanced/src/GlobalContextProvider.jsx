import React, { createContext, useState, useContext} from "react"; 

const GlobalContext = createContext(); // creating a global context object

export const useGlobalContext = () => {
  return useContext(GlobalContext); // returning the context value using useContext hook
};


const GlobalContextProvider = ({ children }) => { // destructuring the children prop
  const [user, setUser] = useState("John Doe"); // state variable to hold the user name

  const handleLogout = () => {
    setUser(""); // setting the user name to empty string on logout
  };

  return (
    <GlobalContext.Provider value={{ user, handleLogout }}> {/* providing the user and handleLogout function as context value */}
      {children} {/* rendering the children components */}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;