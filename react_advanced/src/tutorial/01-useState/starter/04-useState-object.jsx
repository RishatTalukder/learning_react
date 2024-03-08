import { useState } from 'react';

const UseStateObject = () => {
  const [details, setDetails] = useState({
    name: "peter",
    age: 24,
    hobby: "reading",
  });

  const changeDetails = () => {
    setDetails({...details, name: "john", age: 25, hobby: "swimming"});
  }
  
  return <div>

    <h2>{details.name}</h2>
    <h2>{details.age}</h2>
    <h2>{details.hobby}</h2>

    <button className="btn btn-primary" 
      onClick={changeDetails}
    >Change Details</button>
  </div>;
};

export default UseStateObject;
