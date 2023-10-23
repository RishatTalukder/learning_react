// importing the react library
import React from "react";
import ReactDOM from "react-dom";

// creating a react component to render to the DOM
const App = () => {
  return (
    <div>
      {/* image section */}
      <h1>Image</h1>
      {/* title section */}
      <h2>Title</h2>
      {/* author section */}
      <h3>Author</h3>
    </div>
  );
};

// creating a react component to render to the DOM

// rendering the component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
// <App /> is called self closing tag
