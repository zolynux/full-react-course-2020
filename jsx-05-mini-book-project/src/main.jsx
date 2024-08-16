import React from "react";
import ReactDom from "react-dom";

// * Nested Components, React Tools

const BookList = () => {
  return (
    <section>
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
    <article>
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
