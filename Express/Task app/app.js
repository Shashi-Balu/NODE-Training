console.log("Starting");

const express = require("express");
const app = express();

let addTwoNumbers = (a, b) => a + b; //dish1
let multiplyTwoNumbers = (a, b) => a * b; //dish2

//writing dish in the menu
//request the waiter to have the dish
//response of the waiter with the plate of dish
//req - from the frontend
//res - from the backend
//restructure the information so that backend understands
app.get("/add", (req, res) => {
    let sum = addTwoNumbers(5, 6);
    res.status(200).send(sum);
    //No point to write any code after this line. It will run through
});
app.get("/multiply", (req, res) => {
    let product = addTwoNumbers(5, 6);
    res.status(200).send(product);
});

app.listen(8000, () => {
    console.log("Listening");
});

console.log("Ending");
