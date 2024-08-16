import React from "react";
import ReactDom from "react-dom";

// * Nested Components, React Tools

const Greeting = () => {
  return (
    <>
      <Person />
      <Message />
    </>
  );
};

const Person = () => <h2>Zolynux</h2>;
const Message = () => {
  return <p>This is my message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
