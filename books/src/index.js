// importing the react library
import React from "react";
import { createRoot } from "react-dom/client";
// importing the css file
import "./index.css";

const books = [
  {
    id: 1,
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book_1.jpg",
  },
  {
    id: 2,
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
];

// creating a react component to render to the DOM
const App = () => {
  const getBook = (id) => {
    const book = books.find((book) => {
      return book.id === id;
    })
    console.log(book);
  }

  return (
    <section className="booklist">
      {/* rendering the booklist directly using the `map` method */}
      {books.map((book) => {
        return (
          <Book
            {...book}
            key={book.id}
            getBook = {getBook}
          />
        ); // here we are passing the function as a prop
      })}
    </section>
  );
};

// book component
const Book = (props) => {
  // added props parameter and gets the values from the props object
  const wrapper = () => props.getBook(props.id);

  return (
    <div className="book">
      <Image img={props.img} title={props.title} />{" "}
      {/* getting the img and title value from the props object and then passing the title and img to the image component*/}
      <Title title={props.title} />{" "}
      {/* getting the title value from the props object and then passing the title to the title component*/}
      <button onClick={() => props.getBook(props.id)}>Show Text</button>
      {/* getting the aFunctionToShowTheText value from the props object and then passing it to the button component*/}
      <Author author={props.author} />{" "}
      {/* getting the author value from the props object and then passing the author to the author component*/}
    </div>
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
