import React, { useEffect } from "react";
import { useGlobalContext } from "../../GlobalContextProvider";
import CartItem from "./CartItem";
import { FaCartPlus } from "react-icons/fa";
import Navbar from "./Navbar";
import { CLEAR_CART } from "./cartReducer";

const CartContainer = () => {
  const { data, totalPrice, dispatch, loading } = useGlobalContext();

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const url = "http://localhost:3000/cartData"; // URL to fetch cart data

  const fetchData = async () => {
    dispatch({ type: "SET_LOADING", payload: true }); // setting loading state to true
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch({ type: "DISPLAY_CART", payload: data }); // dispatching the fetched data to the context
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false }); // setting loading state to false
    }
  };

  useEffect(() => {
    fetchData(); // fetching data when the component mounts
  }, []); // empty dependency array to run only once

  if (loading) {
    return <h1 className="display-1 text-center text-secondary">loading...</h1>;
  }

  return (
    <div
      className="container py-4"
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Cart Items */}
      {data.length === 0 ? (
        <div className="alert alert-info text-center mb-4">
          No items in the cart.
        </div>
      ) : (
        <>
          <ul className="list-group mb-4">
            {data.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <hr className="my-4" style={{ borderTop: "2px solid #312121ff" }} />
          {/* Total */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Total</h5>
            <h5 className="mb-0 text-primary">${totalPrice.toFixed(2)}</h5>
          </div>

          {/* Clear cart */}
          <div className="text-end">
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={clearCart}
              disabled={data.length === 0}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default CartContainer;
