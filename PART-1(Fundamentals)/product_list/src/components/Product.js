import React from "react";

const Product = ({ name, price, image, description}) => {
  const showDescription = () => {
    alert(description);
  }

  return (
    <div>
      <img src={image} alt={name} />
      <h2
      style={{color: "blue"}}
      >{name}</h2>
      <p>Price: ${price}</p>
      <button
      onClick={() => showDescription()}
      >show description</button>
    </div>
  );
};

export default Product;
