import React from "react";
import { useParams } from "react-router";
import products from "../Data/products";

const Product = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product in the products data set

  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not found
  }

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};
export default Product;