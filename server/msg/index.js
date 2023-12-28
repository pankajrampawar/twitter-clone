const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.get('/',(req, res) => {
    res.send('hello world')
})

const USERS = [
    {
        userName: "pankajPawar",
        phone: "9356446407",
        dOB: "23-4-2005",
        passwod: "password",
    }
]

app.post('/signup', (req, res) => {
    /* {
        username: nameOfUser
        phone: PhoneNumber or email
        DOB: month, day, year
        password: UserPassword

    } */


    const { username, phoneNumber, dOB, password } = req.body;


})

app.listen(port, ()=> {
    console.log('listening on 3000');
})