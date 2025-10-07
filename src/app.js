// create server

const express = require('express');
const app = express();

app.get("/abc", (req, res, next) => {
   res.send({ name: 'naveen', age: 24, city: 'hyd' })
    next();
}, (req, res, next) => {
    // res.send('2 responce')
    // next();
}, (req, res, next) => {
    // res.send('3 rd responce') 
    // next();
})

app.listen(7777, () => {
    console.log('Server is running on http://localhost:7777');
})