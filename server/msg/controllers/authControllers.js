const authServices = require('../services/authServices')

exports.signup = async (req, res) => {
    try {
        const newUser = req.body;
        const response = await authServices.signup(newUser);
        console.log("User sign up successfull, ", response);
        res.json({ message: "User signup successfull", response})
    } catch (error) {
        console.log('error signing up the user', error);
        res.status(500).json({ message: "internal server error" });
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const loginResponse = await authServices.login(username, password);
        res.status(loginResponse.status).json({ message: loginResponse.message });
    } catch (error) {
        res.status(500).json({ message: "internal server error", error});
    }   
};