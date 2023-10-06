//this is the start of a basic frontend react app
// where we have a list of books as the main component
// and the books component is nested inside the list
// the book component also has a nested image and name and author

//importing css file which is loaded automaticly
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

// This is the main component

const namE = "rishat"
// fixed the names and tags as given in the readme file
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <p>{namE}</p>
    </section>
  );
}

// this is the book component
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

// image component
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
);

// title component
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};

const name = "Jordan Moore ";
// author component
const Author = () => {
  const stylling = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={stylling}>{name.toUpperCase()}</h4>;
};

// Render the List component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
