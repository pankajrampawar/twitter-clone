const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async() => {
    try {
        const url = process.env.DATABASE_URL;
        const dbName = "users";

        await mongoose.connect(`${url}`)

        console.log('Connected to mongoDB');
    } catch (error) {
        console.error('Unable to connect to mongoDB', error);
        process.exit(1);
    }
}

module.exports = connectDb;