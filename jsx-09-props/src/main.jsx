import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// Setup Vars

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL210_SR195,210_.jpg',
  title: 'Atomico Habits',
  author: 'James Clear',
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/715mUao8RLL._AC._SR360,460.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
}


const BookList = () => {
  return (
    <section className="booklist">
      <Book img={firstBook.img}  title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img}  title={secondBook.title} author={secondBook.author} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img
        src={props.img}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <h4>
        {props.author}
      </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
