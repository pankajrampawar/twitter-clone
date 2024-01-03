const authServices = require('../services/authServices')
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const newUser = req.body;
        const response = await authServices.signup(newUser);

        const token = jwt.sign(
            { userId: response._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '5h'}
        );

        console.log("User sign up successfull, ", response, token);
        res.json({ message: "User signup successfull", response, token});
    } catch (error) {
        console.log('error signing up the user', error);
        res.status(500).json({ message: "internal server error" });
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const loginResponse = await authServices.login(username, password);

        const token = jwt.sign(
            { userId: loginResponse._id},
            process.env.JWT_SECRET_KEY,
            { expiresIn: '5h'}
        );

        res.status(loginResponse.status).json({ message: loginResponse.message, token });
    } catch (error) {
        res.status(500).json({ message: "internal server error", error});
    }   
};