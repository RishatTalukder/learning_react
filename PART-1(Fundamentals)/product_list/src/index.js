import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./ProductList";

const App = () => {
  return (
    <div>
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
