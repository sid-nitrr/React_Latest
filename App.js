import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled to react(js code) before it reaches the JS engine) - >Babel do it. 
//JSX = HTML like syntax.
const jsxHeading = <h1 id="heading">Namaste React from JSX 🚀</h1>;
const heading = React.createElement("h1",{id:"heading"}, "Namaste from React 🚀");
console.log(heading);
console.log(jsxHeading);
//Both heading and jsxHeading are same, jsxHeading is converted to like heading by babel.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); 
