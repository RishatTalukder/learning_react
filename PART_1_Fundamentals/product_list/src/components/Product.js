import React from "react";

const Product = ({ name, price, image, description }) => {
  const showDescription = () => {
    alert(description);
  };

  return (
    <div className="card h-100 rounded-1 bg-secondary">
      {" "}
      {/* Adding the card class to the div Element */}
      <img src={image} alt={name} className="card-img-top p-3" />{" "}
      {/* Adding the card-img-top class to the img Element */}
      <div className="card-body d-flex flex-column">
        {" "}
        {/* Adding the card-body class to the div Element */}
        <h5 className="card-title">{name}</h5>{" "}
        {/* Adding the card-title class to the h2 Element */}
        <p className="card-text">Price: ${price}</p>{" "}
        {/* Adding the card-text class to the p Element */}
        <button className="btn btn-primary mt-auto" onClick={showDescription}>
          Show Description
        </button>
      </div>
    </div>
  );
};

export default Product;
