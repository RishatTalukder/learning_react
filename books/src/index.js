// importing the react library
import React from "react";
import ReactDOM from "react-dom";
// importing the css file
import './index.css'

// creating a react component to render to the DOM
const App = () => {
  return (
    <div className="booklist">
      {/* book section */}
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

// book component
const Book = () => {
  return (
    <div className="book">
      <Image />
      <Title />
      <Author />
    </div>
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

// author component
const Author = () => <h4>Jordan Moore </h4>;

// rendering the component to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
// <App /> is called self closing tag
