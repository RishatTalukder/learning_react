import { data } from "./data"; // importing the dummy data
export const DELETE_ALL = "DELETE_ALL_ITEMS"; // defining a constant for the action type
export const RESET_ITEMS = "RESET_ITEMS"; // defining a constant for the action type
export const REMOVE_ITEM = "REMOVE_ITEM"; // defining a constant for the action type

export const reducer = (state, action) =>{
  const { type, payload } = action; // destructuring the action object to get the type and payload

  if (type === DELETE_ALL) {
    return { ...state, items: [] }; // returning a new state with an empty items array
  }
  if (type === RESET_ITEMS) {
    return { ...state, items: data }; // returning a new state with the original data
  }
  if (type === REMOVE_ITEM) {
    console.log("Removing item with id:", payload.id); // logging the id of the item to be removed
    const newItems = state.items.filter((item) => item.id !== payload.id); // filtering out the item with the given id
    return { ...state, items: newItems }; // returning a new state with the updated items array
  }
  throw new Error(`No matching action type: ${type}`); // throwing an error if the action type is not matched
}