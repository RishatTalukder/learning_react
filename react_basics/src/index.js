import React from "react";
import ReactDOM from "react-dom/client";

function HelloWorld() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

// function HelloWorld() {
//   return React.createElement("h1", {}, "Hello World");
// }



const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<HelloWorld />);
