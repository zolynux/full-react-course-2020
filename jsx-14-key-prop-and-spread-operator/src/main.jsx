import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import "./index.css";

// Setup Vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL210_SR195,210_.jpg",
    title: "Atomico Habits",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/715mUao8RLL._AC._SR360,460.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81DIK77B0PL._SY342_.jpg",
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
};

/*
const Book = (props) => {
  const {img, title, author} = props;
  */

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
