import React from "react";
import ProductList from "./ProductList";
import Heading from "./components/Heading";
import "bootswatch/dist/lux/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#f2f4f8",
      }}
    >
      <Heading />
      <ProductList />
    </div>
  );
};

export default App;
