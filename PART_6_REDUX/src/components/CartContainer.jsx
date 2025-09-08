import React from "react";
import CartItem from "./CartItem";
import { FaCartPlus } from "react-icons/fa";
import Navbar from "./Navbar";
// import {cartData as data} from '../data/cartData'
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import { openModal } from "../redux/slices/modalSlice";

const CartContainer = () => {

  const { items:data } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div
      className="container py-4"
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      {/* Navbar */}
      <Navbar />

      <ul className="list-group mb-4">
        {data.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <hr className="my-4" style={{ borderTop: "2px solid #312121ff" }} />
      {/* Total */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Total</h5>
        <h5 className="mb-0 text-primary">0.00</h5>
      </div>

      {/* Clear cart */}
      <div className="text-end">
        <button className="btn btn-outline-danger btn-sm"
        onClick={()=> dispatch(openModal())}
        >Clear Cart</button>
      </div>
    </div>
  );
};

export default CartContainer;