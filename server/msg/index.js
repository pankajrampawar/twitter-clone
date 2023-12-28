const express = require('express');
const connectDb = require('./db');
const bodyparser = require('body-parser')
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('hello world')
})

connectDb();

const USERS = [
    {
        name: 'pankaj',
        userName: "pankajPawar",
        phone: "9356446407",
        dOB: "23-4-2005",
        passwod: "password",
    }
]

app.post('/signup', (req, res) => {
    const newUser = req.body;


})

app.listen(port, ()=> {
    console.log('listening on 3000');
})