import { useContext } from "react";
import { UserContext } from "../Start"; // importing the UserContext

const useUserContext = () => {
  return useContext(UserContext); // returning the context value using useContext hook
};
export default useUserContext;