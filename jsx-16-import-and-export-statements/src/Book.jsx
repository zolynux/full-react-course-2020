const Book = ({ img, title, author }) => {
    // attribute, eventHandler
    // onClick, onMouseOver
  
    const clickHandler = (e) => {
      console.log(e);
      console.log(e.target);
      alert("Hello World");
    };
  
    const complexExample = (author) => {
      console.log(author);
    };
    return (
      <article
        className="book"
        onMouseOver={() => {
          console.log(title);
        }}
      >
        <img src={img} alt={title} />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>
          Reference example
        </button>
        <br />
        <button type="button" onClick={() => complexExample(author)}>
          More complex Example
        </button>
      </article>
    );
  };

  export default Book;