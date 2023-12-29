const express = require('express');
const connectDb = require('./db');
const userModel = require('./models/User');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt')
const app = express();
const port = 3000;

app.use(bodyparser.json());

connectDb();

app.post('/signup', async (req, res) => {
    try {
        const newUser = req.body;
        console.log("here is a new user: ", newUser)
        
        const userToSave = new userModel({
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            phoneNumber: newUser.phoneNumber,
            dateOfBirth: newUser.dateOfBirth,
            password: bcrypt.hashSync(newUser.password, 10),
            profilePicture: newUser.profilePicture,
            bio: newUser.bio,
        });

        const response = await userToSave.save();
        console.log("user saved successfully", response);
        res.json({message: "user saved successfully", response});
    } catch (error) {
        console.error("Error creating the user", error);
        res.status(500).json({error: "internal server error"})
    }
})

app.post('/login', async(req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userModel.findOne({ username });

        if(!user) {
            console.log('user not found');
            res.status(401).json({ message: "invalid username" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            res.status(200).json({ message: "user login successfull."});
        } else {
            res.status(401).json({ message: "password does not match." });
        }
    } catch (error) {
        console.log("error during login", error);
        res.status(500).json({ error: "internal server error please try again later."})
    }
})


app.listen(port, ()=> {
    console.log('listening on 3000');
})