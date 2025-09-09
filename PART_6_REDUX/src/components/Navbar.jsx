import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {
    items: data,
    totalAmount,
    totalQuantity,
  } = useSelector((state) => state.cart);
  return (
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
          {totalQuantity}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
