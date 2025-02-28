import React from "react";
import Product from "./components/Product";
import products from "./data/products";

const ProductList = () => {
  const showDescription = (description) => {
    alert(description);
  };

  return (
    <div>
      {products.map((products, index) => {
        return (
          <Product
            key={index}
            {...products}
            showDescription={showDescription}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
