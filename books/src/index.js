//this is the start of a basic frontend react app
// where we have a list of books as the main component
// and the books component is nested inside the list
// the book component also has a nested image and name and author

//importing css file which is loaded automaticly
import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";

// This is the main component
function List() {
  return (
    <h3 className="booklist">
      <Books /> {/* Render the Books component */}
      <Books /> {/* Render the Books component */}
      <Books /> {/* Render the Books component */}
      <Books /> {/* Render the Books component */}
    </h3>
  );
}

// This is the nested component
function Books() {
  return (
    <div className="book">
      <Image /> {/* Render the Image component */}
      <Name /> {/* Render the Name component */}
      <Author /> {/* Render the Author component */}
    </div>
  );
}

// This is the component for the book image
const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91fRT+cJNzL._AC_UL900_SR900,600_.jpg"
      alt="A Little Life"
    />
  );
};

// This is the component for the book name
const Name = () => {
  return <h4>A Little Life</h4>;
};

// This is the component for the book author
function Author() {
  return <h5>Hanya Yanagihara</h5>;
}

// Render the List component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<List />);
