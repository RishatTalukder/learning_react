// importing the react library
import React from "react";
import { createRoot } from "react-dom/client";
// importing the css file
import "./index.css";
import { books } from "./books.js";
import Book from "./Book.js";

// creating a react component to render to the DOM
const App = () => {
  return (
    <>
      <h1>Amazon Best Sellers List</h1>
      <section className="booklist">
        {/* rendering the booklist directly using the `map` method */}
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />; // here we are passing the function as a prop
        })}
      </section>
    </>
  );
};

// image component
const Image = (
  props // added props parameter
) => (
  <img src={props.img} alt={props.title} /> // getting the img value from the props
);

// title component
const Title = (props) => {
  // added props parameter
  return <h2>{props.title}</h2>; // getting the title value from the props
};

// author component
const Author = (props) => {
  // added props parameter
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>{props.author}</h4>; // getting the author value from the props object
};

// rendering the component to the DOM
const root = createRoot(document.getElementById("root"));
root.render(<App />);
// <App /> is called self closing tag
