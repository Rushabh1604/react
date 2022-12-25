const heading = React.createElement("h1", {id : 'title'}, "namaste");
const heading2 = React.createElement("h2", {id : 'title'}, "React");

const container = React.createElement("div",{id:'container'},[heading,heading2])
// const root = ReactDOM.createRoot(document.getElementById("container"));
const root = ReactDOM.createRoot(document.getElementById("container"));
// console.log(root);
// root.render([heading,heading2]);

root.render(container);


