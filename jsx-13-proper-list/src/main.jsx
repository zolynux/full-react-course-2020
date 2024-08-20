import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Setup Vars
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL210_SR195,210_.jpg",
    title: "Atomico Habits",
    author: "James Clear",
  },
  {
    img: "https://m.media-amazon.com/images/I/715mUao8RLL._AC._SR360,460.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
  {
    img: "https://m.media-amazon.com/images/I/81DIK77B0PL._SY342_.jpg",
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
};

/*
const Book = (props) => {
  const {img, title, author} = props;
  */

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
