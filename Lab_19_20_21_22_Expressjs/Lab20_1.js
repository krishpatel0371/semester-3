const express = require('express');
const app = express();

const middlewarefunction = (req, res, next) => {
    console.log("middleware function is executed");
    next();
}

const paisafunction = (req, res, next) => {
    console.log("paisa function is executed");
    next();
}

app.get("/home",middlewarefunction,paisafunction, (req, res) => {
    console.log("actual function called")
    res.send("this is a home page");
});

app.listen(5000, () => {
    console.log("server is running on port 5000");
});
