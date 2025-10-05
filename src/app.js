// create server

const express = require('express');
const app = express();

app.use('/getData',(req,res) => {
    res.send('Hello world');
})

app.use('/updateuser',(req,res) => {
    res.send('naveen gande');
})

app.listen(7777, () => {
    console.log('Server is running on http://localhost:7777');
})