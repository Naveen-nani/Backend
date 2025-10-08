// create server

const express = require('express');
const app = express();




app.get('/getUserData', (req, res, next) => {

    try {
        throw new Error('tfyghjk');  // throw an error
        res.send('Home Page');

    } catch (error) {
        res.status(500).send(('Some thing went wrong'));
    }
})









 //op - it will go on in postman and keep loading
 // we have to send some response or end the req res cycle
 // we can use next() to go to next route handiler

app.listen(7777, () => {
    console.log('Server is running on http://localhost:7777');
})