import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled to react(js code) before it reaches the JS engine) - >Babel do it.
//JSX = HTML like syntax.

//React Component
//Class Based => Old
//Function Based =>New

//React Functional Component
//Functional Component name is always in caps
///Arrow fn returning jsx , then this jsx will be transpiled by babel to js
const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React from JSX 🚀
    </h1>
);

const HeadingComponent = () => (
    <div id = "container">
        {Title()} #We can write any js code inside this curly braces. Here we r calling Title method.
        <Title></Title> # All 3 ways are same.
        <Title/>
        <h1 className="heading">Namaste React from Functional Component.</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
