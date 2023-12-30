const userModel = require('../models/User');

exports.updateUser = async (userId, tweetId)=>{
    try {
        await userModel.findByIdAndUpdate(
            userId,
            { $push: {tweets: tweetId} },
            { new: true }
        );

        return { message: "updated user"};        
    } catch (error) {
        return { message: "Error updating the user", error};
    }

}