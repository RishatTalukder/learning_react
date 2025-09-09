import React from "react";
import {
  FaArrowAltCircleUp,
  FaArrowCircleDown,
  FaArrowUp,
  FaTrash,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
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
          <button
            className="text-success btn"
            onClick={() => dispatch(increase(item.id))}
          >
            <FaArrowAltCircleUp />
            {/* <FaArrowUp /> */}
          </button>
          <span>{item.quantity}</span>
          <button
            className="text-danger btn"
            onClick={() => dispatch(decrease(item.id))}
          >
            <FaArrowCircleDown />
          </button>
        </div>

        {/* Item total price */}
        <div className="ms-3 fw-bold d-flex align-items-center">
          ${item.price * item.quantity}
          <button
            className="btn text-danger ms-3 mb-1"
            onClick={() => dispatch(removeItem(item.id))}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </li>
  );
};
export default CartItem;