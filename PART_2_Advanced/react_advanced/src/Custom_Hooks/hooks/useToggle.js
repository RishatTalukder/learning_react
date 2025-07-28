import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((prevValue) => !prevValue); // toggling the value
  };

  return [value, toggle]; // returning the value and the toggle function
};
export default useToggle;