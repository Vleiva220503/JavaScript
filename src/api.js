const express = require('express');
const mongoose = require('mongoose')
const user = require('./users.handler')
const app = express();

mongoose.connect()

const port = 3000;


app.get('/api/', user.listen )

app.listen(port, ()=>{
    console.log(`El ejemplo  se ejecuta en el puerto ${port}`);
    console.log('Run in: http://localhost:3000/api')
})