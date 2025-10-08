// create server

const express = require('express');
const app = express();
const  userAuth = require("./middleware/auth");
const  adminAuth = require("./middleware/auth");

// app.use("/admin", adminAuth);



app.get("/user", userAuth ,(req, res, next) => {
    res.send({ message: 'user added' })
    //  next();
 })

app.get("/admin/getData", (req, res, next) => {
    res.send({ name: 'naveen', age: 24, city: 'hyd' })
    //  next();
 })

 app.get("/admin/deleteUser", (req, res, next) => {
    res.send({ message: 'user got deleted' })
    //  next();
 })

 //op - it will go on in postman and keep loading
 // we have to send some response or end the req res cycle
 // we can use next() to go to next route handiler

app.listen(7777, () => {
    console.log('Server is running on http://localhost:7777');
})