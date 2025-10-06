// create server

const express = require('express');
const app = express();

app.get('/getData',(req,res) => {
    res.send({name:'naveen', age:24, city:'hyd'})
  })

app.post('/getData',(req,res) => {
  res.send({name:'naveen', age:24})
})

app.delete('/getData', (req, res) => {
    res.send({ message: 'data deleted successfully' })
})






// work like default route.
app.use('/',(req,res) => {
    res.send('hello from naveen Gande ......!')
})  

app.listen(7777, () => {
    console.log('Server is running on http://localhost:7777');
})