import React from "react";
import { useGlobalContext } from "../../GlobalContextProvider";
import CartItem from "./CartItem";
import { FaCartPlus } from "react-icons/fa";

const CartContainer = () => {
  const { data } = useGlobalContext();


  return (
    <div
      className="container py-4"
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Left side: Title */}
        <h3 className="mb-0 text-primary">Shopping Cart</h3>

        {/* Right side: Cart Icon with badge */}
        <div className="position-relative">
          <FaCartPlus size={28} className="text-primary" />
          <span
            className="position-absolute top-0 start-100 translate-middle badge bg-primary rounded-circle"
            style={{
              fontSize: "0.7rem",
              width: "1.5rem",
              height: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white",
            }}
          >
            5
          </span>
        </div>
      </div>

      <ul className="list-group mb-4">
        {data.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <hr className="my-4" style={{ borderTop: "2px solid #312121ff" }} />
      {/* Total */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Total</h5>
        <h5 className="mb-0 text-primary">${total}</h5>
      </div>

      {/* Clear cart */}
      <div className="text-end">
        <button className="btn btn-outline-danger btn-sm">Clear Cart</button>
      </div>
    </div>
  );
};

export default CartContainer;
