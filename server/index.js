const express = require('express');
const connectDb = require('./db');
const app = express();
const authRoutes = require('./routes/auth');
const tweetRoutes = require('./routes/tweet')
const bodyparser = require('body-parser')

port = 3090

app.use(bodyparser.json());
connectDb();

app.use('/auth', authRoutes);
app.use('/tweet', tweetRoutes);

app.listen(port, ()=> {
    console.log(`listening on ${port}`);
})