/**
 * We want to create below like nested html str in react, via nesting child.
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> </h1
 *      </div>
 * </div>
 * 
 * ReactElement(Object) =>HTML(Browser Understands)
 */
 
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement(
            "h1",
            {color: "red"},
            "I am a h1 tag from React via nesting."
        )
    )
)
//commenting below code as we r rendring parent now. 
// const heading = React.createElement(
//     'h1', 
//     {id: "heading"}, //2nd arg is atributes of 1st arg or tag.
//     "Hello World from React!" //3rd arg is always a child of 1st arg or tag.
// );
// console.log(heading); //heading
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //this render method converting heading object to h1 tag
