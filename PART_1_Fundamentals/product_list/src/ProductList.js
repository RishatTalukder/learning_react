import React from "react";
import Product from "./components/Product";
import products from "./data/products";

const ProductList = () => {
  return (
    <div className="container">
      <div className="p-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-2">
        {products.map((products, index) => {
          return (
            <div className="col" key={products.id}>
              <Product {...products} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
