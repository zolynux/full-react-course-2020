import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
};

const author = 'James Clear'
const Book = () => {

  const title = 'Atomico Habits'

  return (
    <article className="book">
<img
  src="https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL210_SR195,210_.jpg"
  alt="Atomic Habits"
/>
<h1>{title}</h1>
<h4>
    {author.toUpperCase()}
  </h4>
  <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
