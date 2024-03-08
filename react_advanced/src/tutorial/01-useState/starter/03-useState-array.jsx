import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    console.log(newPeople);
    setPeople(newPeople);
  };

  const clearall = ()=>{
    setPeople([]);
  }


  return (
    <div className="d-flex justify-content-center align-items-center flex-column vh-100">
      <h2>
        {people.map((item, index) => {
          return (
            <div
              key={item.id}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <h4>{item.name}</h4>
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => removeItem(item.id)}
              >
                remove
              </button>
            </div>
          );
        })}
      </h2>
      <button type="button" className="btn btn-danger"
      
      onClick={clearall}
      >
        clear All items
      </button>
    </div>
  );
};

export default UseStateArray;
