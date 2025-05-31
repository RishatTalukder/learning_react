import Item from './Item';
import React from "react";
import { data } from "./data"; // importing the data from the data.js file
const MissingData = () => {
  return (
    <div>
      <h1>Missing Data Handling</h1>
      {data.map((item) => (
        <Item  {...item}  key={item.id} />
      ))}
    </div>
  );
};
export default MissingData;
