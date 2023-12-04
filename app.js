const express = require('express');


const app = express();

// DB connection

require('./db/connection');

// Import files

const Users = require ('./models/Users')


// App User

app.use(express.json());
app.use(express.urlencoded({ extended:false }));


const PORT = process.env.PORT || 8000;


// Routes
app.get('/',(req,res)=>{
    res.send('Welcome to this place')
})

app.listen(PORT,()=>{
    console.log('Listening on port' +" "+ PORT);
})