import React from "react";
import Product from "./components/Product";

const products = [
  {
    name: "AMD Ryzen 5 5600X",
    price: "11,500",
  },
  {
    name: "NVIDIA RTX 3060",
    price: "45,000",
  },
  {
    name: "Corsair Vengeance RGB Pro 16GB",
    price: "6,500",
  },
];

const ProductList = () => {

  const newProducts = products.map((product, index) => {
    return (
      <Product key={index} {...product} />
    )
  })

  return (
    <div>
      {newProducts}
    </div>
  );
};

export default ProductList;
