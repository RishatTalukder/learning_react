import React from "react";
import { FaArrowAltCircleUp, FaArrowCircleDown, FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../../GlobalContextProvider"; // importing the custom hook
import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_ITEM } from "./cartReducer"; // importing the action types

const CartItem = ({ item }) => {
  const { dispatch } = useGlobalContext(); // accessing the dispatch function from the context

  const increaseQuantity = () => {
    dispatch({ type: INCREASE_QUANTITY, payload: { id: item.id } }); // dispatching an action to increase the quantity
  };

  const decreaseQuantity = () => {
    dispatch({ type: DECREASE_QUANTITY, payload: { id: item.id } }); // dispatching an action to decrease the quantity
  };

  const removeItem = () => {
    dispatch({ type: REMOVE_ITEM, payload: { id: item.id } }); // dispatching an action to remove the item
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {/* Left side: Image + Info */}
      <div className="d-flex align-items-center">
        <img
          src={item.image}
          alt={item.name}
          className="me-3"
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        <div>
          <h6 className="mb-1">{item.name}</h6>
          <small className="text-muted">${item.price}</small>
        </div>
      </div>

      {/* Right side: Quantity + Amount */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column align-items-center">
          <button className="text-success btn" onClick={increaseQuantity}>
            <FaArrowAltCircleUp />
          </button>
          <span>{item.quantity}</span>
          <button
            className="text-danger btn"
            onClick={decreaseQuantity}
            disabled={item.quantity <= 1} // disabling the button if the quantity is less than or equal to 1
          >
            <FaArrowCircleDown />
          </button>
        </div>

        {/* Item total price */}
        <div className="ms-3 fw-bold">${(item.price * item.quantity).toFixed(2)}</div>

        {/* Remove Item Button */}
        <button className="btn text-danger" onClick={removeItem}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
};
export default CartItem;