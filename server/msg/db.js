const mongoose = require('mongoose');

const connectDb = async() => {
    try {
        const url = "mongodb+srv://pankajpawars123:9MEqh9IS0BW63aU9@cluster0.a8szdse.mongodb.net/";
        const dbName = "Cluster0";

        await mongoose.connect(`${url}/${dbName}`)

        console.log('Connected to mongoDB');
    } catch (error) {
        console.error('Unable to connect to mongoDB', error);
        process.exit(1);
    }
}

module.exports = connectDb;