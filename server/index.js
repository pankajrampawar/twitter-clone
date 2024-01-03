const express = require('express');
const connectDb = require('./db');
const app = express();
const authRoutes = require('./routes/auth');
const tweetRoutes = require('./routes/tweet')
const bodyparser = require('body-parser')

app.use(bodyparser.json());
connectDb();

app.use('/auth', authRoutes);
app.use('/tweet', tweetRoutes);

app.listen(3000, ()=> {
    console.log('listening on 3000');
})