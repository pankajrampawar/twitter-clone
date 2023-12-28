const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = async() => {
    try {
        const url = process.env.DATABASE_URL;
        const dbName = "Cluster0";

        await mongoose.connect(`${url}/${dbName}`)

        console.log('Connected to mongoDB');
    } catch (error) {
        console.error('Unable to connect to mongoDB', error);
        process.exit(1);
    }
}

module.exports = connectDb;