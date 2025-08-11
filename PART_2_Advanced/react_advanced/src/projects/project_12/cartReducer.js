export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_ITEM = "REMOVE_ITEM"; // add this line

const updateTotals = (data) => {
  const totalItems = data.reduce((acc, item) => acc + item.quantity, 0); // calculating total items count
  const totalPrice = data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ); // calculating total price
  return { totalItems, totalPrice }; // returning the totals
};

export const reducer = (state, action) => {
  const { type, payload } = action; // destructuring the action object to get the type and payload

  if (type === CLEAR_CART) {
    return { ...state, data: [], totalItems: 0, totalPrice: 0 }; // returning a new state with an empty cart and totals set to 0
  }

  if (type === INCREASE_QUANTITY) {
    const newData = state.data.map((item) => {
      if (item.id === payload.id) {
        return { ...item, quantity: item.quantity + 1 }; // increasing the quantity of the item
      }
      return item; // returning the item as it is if the id does not match
    });
    const { totalItems, totalPrice } = updateTotals(newData); // updating the totals
    return { ...state, data: newData, totalItems, totalPrice }; // returning a new state with the updated cart data and totals
  }

  if (type === DECREASE_QUANTITY) {
    const newData = state.data.map((item) => {
      if (item.id === payload.id) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 }; // decreasing the quantity of the item but not less than 1
      }
      return item; // returning the item as it is if the id does not match 
    });
    const { totalItems, totalPrice } = updateTotals(newData); // updating the totals
    return { ...state, data: newData, totalItems, totalPrice }; // returning a new state with the updated cart data and totals
  }

  if (type === REMOVE_ITEM) {
    const newData = state.data.filter((item) => item.id !== payload.id); // remove the item by id
    const { totalItems, totalPrice } = updateTotals(newData); // update totals
    return { ...state, data: newData, totalItems, totalPrice }; // return new state
  }

  if (type === "SET_LOADING") {
    return { ...state, loading: payload }; // setting the loading state
  }

  if (type === "DISPLAY_CART") {
    const { totalItems, totalPrice } = updateTotals(payload); // updating totals based on the payload
    return { ...state, data: payload , totalItems, totalPrice }; // returning a new state with the updated cart data and totals
  }

  throw new Error(`No matching action type: ${type}`); // throwing an error if the action type is not matched
};
export default reducer;