import React from "react";
import ProductList from "./ProductList";
import Heading from "./components/Heading";
import "bootswatch/dist/lux/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const App = () => {
  return (
    <>
      <Heading />
      <ProductList />
    </>
  );
};

export default App;
