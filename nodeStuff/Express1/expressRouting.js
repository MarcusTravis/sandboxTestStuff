const express= require("express");
const app = express();

// app object has a few methods
// HTTP verbs! REST verbs!
// CRUD app cooresponence!
// 1. GET - READ
// -DEFAULT for all browsers is get.
// 2. POST - CREATE
// 3. DELETE - DELETE
// 4. PUT - UPDATE
// 5. ALL - will accept any method

// Take 2 args:
// 1. path
// 2. callback to run if an HTTP request that matches THIS verb
// is made to the path in #1
// app.all("/",(req, res) => {
//     res.send(`<h1>Welcome to the home page!</h1>`);
// });
app.get("/",(req, res) => {
    res.send(`<h1>Welcome to the home GET page!`);
});
app.post("/",(req, res) => {
    res.send(`<h1>Welcome to the home POST page!`);
});
app.delete("/",(req, res) => {
    
});
app.put("/",(req, res) => {
    
});


app.listen(3000);
console.log("expressRouting.js is listening on port 3000");