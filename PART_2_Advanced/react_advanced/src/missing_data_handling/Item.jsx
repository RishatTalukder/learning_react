import React from "react";
import av from "../../../../PART_1_Fundamentals/landing_page/src/avaters/av.svg"
const Item = ({
  id,
  name,
  nickname,
  description,
  images, // default value for images
}) => {
  const image = (images && images[0] && images[0].profile) ?? av; // Fallback to a default image if no profile image is available
  return (
    <div key={id} className="card">
      <h2>{name.full}</h2>
      <p>{nickname || "No nickname available"}</p>
      <p>{description || "No description available"}</p>
        <img
          src={image}
          alt={name.full}
          className="card-img-top"
          style={{ width: "200px", height: "auto" }}
        />
    </div>
  );
};
export default Item;