import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL210_SR195,210_.jpg"
    alt="Atomic Habits"
  />
);

const Title = () => <h1>Atomic Habits</h1>;

const Author = () => <h4>James Clear</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
