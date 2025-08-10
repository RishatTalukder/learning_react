import React, { createContext, useState, useContext } from "react";
import { cartData } from "./projects/project_12/cartData";

const GlobalContext = createContext(); // creating a global context object

export const useGlobalContext = () => {
  return useContext(GlobalContext); // returning the context value using useContext hook
};

const GlobalContextProvider = ({ children }) => {
  // destructuring the children prop
  const [data, setData] = useState(cartData); // initializing state with cart data

  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
