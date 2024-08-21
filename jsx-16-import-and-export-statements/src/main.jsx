import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book";

// CSS
import "./index.css";

import { books } from "./books";
import { greeting } from "./testing/testing";

const BookList = () => {
  console.log(greeting)
  return (
    <section className="booklist">
  
      {books.map((book, index) => {
        return <Book key={index} {...book} />;
      })}
    </section>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
