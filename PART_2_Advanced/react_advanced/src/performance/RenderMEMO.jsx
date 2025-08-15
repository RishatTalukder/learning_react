import React, { memo } from "react";  
const RenderMEMO = ({ name }) => {
  return <div
  className="m-2 p-2"
  >{name}</div>;
};
export default memo(RenderMEMO); // Using memo to prevent unnecessary re-renders