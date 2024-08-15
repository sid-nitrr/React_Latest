const heading = React.createElement(
    'h1', 
    {id: "heading"}, 
    "Hello World from React!"
);
console.log(heading); //heading
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //this render method converting heading object to h1 tag
