import React, { useReducer } from "react";
import { data } from "./data"; // importing the dummy data
import { reducer, DELETE_ALL, RESET_ITEMS, REMOVE_ITEM } from "./reducer"; // importing the reducer function and the action types 

const initialState = {
  items: data, // initializing the state with the dummy data
}

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState); // using useReducer to manage the state
  
  const handleClick = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } }); // dispatching an action to remove the item
  };
  const resetItems = () => {
    dispatch({ type: RESET_ITEMS }); // dispatching an action to reset the items
  };

  const deleteAllItems = () => {
    dispatch({ type: DELETE_ALL }); // dispatching an action to delete all items
  };

  console.log("Current state:", state); // logging the current state for debugging

  return (
    <div>
      <h2>Reducer Example</h2>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleClick(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {state.items.length <= 0 ? (
        <button onClick={resetItems}>Reset Items</button>
      ) : (
        <button onClick={deleteAllItems}>Delete All Items</button>
      )}
    </div>
  );
};
export default ReducerExample;