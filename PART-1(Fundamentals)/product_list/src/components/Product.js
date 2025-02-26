import React from "react";

const Product = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Image</h1>
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
    </div>
  );
};

export default Product;
