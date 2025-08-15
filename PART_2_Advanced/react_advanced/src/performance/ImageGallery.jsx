import React from "react";
import av from "./av.svg";

const ImageGallery = () => {
  const images = Array.from({ length: 5000 }, () => av);

  return (
    <div className="row">
      {images.map((image, index) => (
        <div className="col-4 mb-3" key={index}>
          <img src={image} alt={`Random ${index}`} className="img-fluid" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
