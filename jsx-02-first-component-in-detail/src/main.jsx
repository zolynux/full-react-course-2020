import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// Alway return JSX

function Greeting() {
  return (
    <>
      <h1>Hello World</h1>
      <h3>This is Main in file JSX</h3>
    </>
  );
}

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
