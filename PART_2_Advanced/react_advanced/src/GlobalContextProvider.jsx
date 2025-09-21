import React, { createContext, useState, useContext, useReducer } from "react";
import { cartData } from "./projects/project_12/cartData";
import reducer from "./projects/project_12/cartReducer";

const GlobalContext = createContext(); // creating a global context object

export const useGlobalContext = () => {
  return useContext(GlobalContext); // returning the context value using useContext hook
};

const initialState = {
  loading: true, // initial loading state
  data: [], // initial cart data
  totalItems: 0, // total items in the cart
  totalPrice: 0, // total price of the items in the cart
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // using useReducer to manage the state

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
