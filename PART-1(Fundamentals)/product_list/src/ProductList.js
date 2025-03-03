import React from "react";
import Product from "./components/Product";
import products from "./data/products";

const ProductList = () => {
  return (
    <div>
      {products.map((products, index) => {
        return (
          <Product
            key={index}
            {...products}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
