import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <h1 id="heading" className="head">
    Hello React from JSX 🚀
  </h1>
);
const number = 10000;

const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <h1 className="heading">Hello from Functional Component 🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
