import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { FaCartPlus } from "react-icons/fa";
import Navbar from "./Navbar";
// import {cartData as data} from '../data/cartData'
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, clearCart, fetchCartItems } from "../redux/slices/cartSlice";
import { openModal } from "../redux/slices/modalSlice";

const CartContainer = () => {
  const {
    items: data,
    totalAmount,
    totalQuantity,
    isLoading,
    error
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCartItems())
  },[])

  useEffect(() => {
    dispatch(calculateTotal());
  }, [data]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

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

      {/* Clear cart */}
      {totalQuantity > 0 ? (
        <>
          <hr className="my-4" style={{ borderTop: "2px solid #312121ff" }} />
          {/* Total */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Total</h5>
            <h5 className="mb-0 text-primary">${totalAmount.toFixed(2)}</h5>
          </div>
          <div className="text-end">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => dispatch(openModal())}
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-muted">No items in the cart</div>
      )}
    </div>
  );
};

export default CartContainer;
