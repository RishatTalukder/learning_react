import React from "react";
import Product from "./components/Product";

const product1 = {
  name: "AMD Ryzen 5 5600X",
  price: "11,500",
}; // Product 1

const product2 = {
  name: "NVIDIA RTX 3060",
  price: "45,000",
}; // Product 2

const product3 = {
  name: "Corsair Vengeance RGB Pro 16GB",
  price: "6,500",
}; // Product 3

const ProductList = () => {
  return (
    <div>
      <h1>Product List</h1>
      <Product {...product1} />
      <Product {...product2} />
      <Product {...product3} />
    </div>
  );
};

export default ProductList;
