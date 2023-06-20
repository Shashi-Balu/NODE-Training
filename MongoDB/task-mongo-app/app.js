require("./mongooseFile"); //run whole file automatically

const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8080;

app.listen(() => {
    console.log(`Tasks Mongo App is running on Port: ${PORT}`);
});
