import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn btn-primary">
        click me
      </button>
    </div>
  );
};
export default CodeExample;
