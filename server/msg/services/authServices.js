const userModel = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = async (newUser) => {
    const userToSave = new userModel({
        name: newUser.name,
        username: newUser.name,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
        password: bcrypt.hashSync(newUser.password, 10),
        dateOfBirth: newUser.dateOfBirth,
        profilePicture: newUser.profilePicture,
        bio: newUser.bio,
    });

    return userToSave.save();   
};

exports.login = async (username, password) => {
        const user = await userModel.findOne({ username }); 

        if (!user) {
            return { message: "user not found", status: 401};
        }
        
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            return { status: 200, message: "login successfull"};
        } else {
            return { status: 401, message: "password does not match" };
        };
}