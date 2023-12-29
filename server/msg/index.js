const express = require('express');
const connectDb = require('./db');
const app = express();
const authRoutes = require('./routes/auth')
const bodyparser = require('body-parser')

app.use(bodyparser.json());
connectDb();

app.use('/auth', authRoutes)

app.listen(3000, ()=> {
    console.log('listening on 3000');
})