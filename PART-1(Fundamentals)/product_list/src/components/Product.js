import React from "react";

const Product = ({ name, price, image, description, showDescription }) => {
  

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button
      onClick={() => showDescription(description)}
      >show description</button>
    </div>
  );
};

export default Product;
