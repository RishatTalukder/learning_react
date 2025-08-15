import React, { memo } from "react";
const RenderMEMOIssue = ({ nameList, removeName }) => {
  return (
    <div>
      {nameList.map((name, index) => (
        <div key={index} className="m-2 p-2 d-flex justify-content-between align-items-center">
          <span>{name}</span>
          <button className="btn btn-danger" onClick={() => removeName(name)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  ); 
};
export default memo(RenderMEMOIssue); // Using memo to prevent unnecessary re-renders