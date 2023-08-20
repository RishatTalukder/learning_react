import React from "react";
import ReactDOM from "react-dom/client";

// Importing necessary modules

/**
 * Define a functional component named HelloWorld
 *
 * @return {JSX.Element} - the JSX element
 */
// function HelloWorld() {
//   // Define a functional component named HelloWorld

//   return (
//     <div>
//       {/* Start of JSX element */}
//       <h1>Hello World</h1>
//       {/* End of JSX element */}
//     </div>
//   );
//   // Return the JSX element
// }

// function HelloWorld() {
//   return React.createElement("h1", {}, "Hello World");
// }

function HelloWorld() {
  // Define a functional component named HelloWorld

  return (
    //the elements in return are JSX and you can return only one element...
    //we can do this because we are returning only one element

    <>
      {/* by adding <> we can return more than one element */}
      <div>
        <div>
          <ul>
            <li>
              <a href="https://www.google.com"> Hello </a>
            </li>
          </ul>
        </div>
      </div>
      {/*we can't return more than one element} */}
      <h1>Hello World</h1>
    </>
  );
  // Return the JSX element
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// Creating a root element using ReactDOM.createRoot()

rootElement.render(<HelloWorld />);
// Rendering the HelloWorld component inside the root element
