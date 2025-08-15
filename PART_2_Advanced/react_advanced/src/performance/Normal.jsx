import React, { useCallback, useMemo } from "react";
import RenderMEMOIssue from "./RenderMEMOIssue";

const names = ["John", "Jane", "Doe", "Smith", "Alice", "Bob"];
const Normal = () => {
  const [count, setCount] = React.useState(0);
  const [nameList, setNameList] = React.useState(names);

  const sunOneToOneBillion = () => {
    let sum = 0;
    for (let i = 1; i <= 1000000000; i++) {
      sum += i;
    }
    return sum;
  };

  const summ = useMemo(() => sunOneToOneBillion(), []); // Memoizing the sum calculation to avoid re-computation on every render

  const removeName = useCallback((name) => {
    setNameList(nameList.filter((n) => n !== name)); // removing the name from the list
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <h1>Normal Component</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <div>
        <RenderMEMOIssue
          nameList={nameList}
          removeName={removeName} // passing the memoized remove function to the Render component
        />
      </div>
    </div>
  );
};
export default Normal;
