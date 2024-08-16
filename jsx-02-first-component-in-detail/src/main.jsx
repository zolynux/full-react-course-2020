import React from "react";
import ReactDom from "react-dom";

// * JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every elemento
// formatting

function Greeting() {
  return (
    <section>
      <article>
        <h1>Hello World</h1>
        <h3>Hello People</h3>
        <ul>
          <li>
            <a href="#">Hello World</a>
          </li>
        </ul>
      </article>
      <div></div>
    </section>
  );
}

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
