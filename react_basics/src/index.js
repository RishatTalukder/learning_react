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

// jsx rules in react and how to use it are discussed below
// function HelloWorld() {
//   // Define a functional component named HelloWorld

//   return (
//     //the elements in return are JSX and you can return only one element...
//     //we can do this because we are returning only one element

//     <>
//       {/* by adding <> we can return more than one element
//       which acts as a container, so in the end we will have only one element*/}
//       {/* always make sure that you return only one element
//       elements inside the return are JSX
//       and elements should have a closing tag */}
//       <div class="hello">
//         <div>
//           <ul>
//             <li>
//               <a href="https://www.google.com"> Hello </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/*we can't return more than one element} */}
//       <h1>Hello World</h1>
//     </>
//   );
//   // Return the JSX element
// }

//nested elements in react
function HelloWorld() {
  return (
    <div>
      {/* reference Itvaya and Rocks */}
      <Itvaya />
      <Rocks />
    </div>
  );
}

//Itvaya and Rocks are functional components which is rendered inside HelloWorld
function Itvaya() {
  return <h1>ITVAYA</h1>;
}

function Rocks(){
  return <h2>ROCKS</h2>;
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// Creating a root element using ReactDOM.createRoot()

rootElement.render(<HelloWorld />);
// Rendering the HelloWorld component inside the root element
