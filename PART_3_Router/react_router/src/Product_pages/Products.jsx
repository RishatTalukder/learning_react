import React from "react";
import { Link } from "react-router";
import products from "../Data/products";

const Products = () => {
  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="" key={product.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <Link to={`${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
