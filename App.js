import React from "react";
import ReactDOM from "react-dom/client";

/**
 * We want to create below like nested html str in react, via nesting child.
 * <div id = "parent">
 *      <div id = "child1">
 *          <h1>I'm h1 tag from child1</h1>
 *          <h2>I'm h2 tag from child1</h2>
 *      </div>
 *      <div id = "child2">
 *          <h1>I'm h1 tag from child2</h1>
 *          <h2>I'm h2 tag from child2</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) =>HTML(Browser Understands)
 */
 
//to create nested elements below code is a mess. Post this we will learn JSX to solve this problem.
const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child1"},
            [
                React.createElement("h1",{},"Namaste React 🚀 from Child1."),
                React.createElement("h2",{},"I am a h2 tag from Child1"),
            ]
                
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement("h1",{},"I am a h1 tag from Child2."),
                React.createElement("h2",{},"I am a h2 tag from Child2."),
            ]    
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //this render method converting heading object to h1 tag
