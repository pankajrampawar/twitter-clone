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

exports.updateRetweetsByUser  = async (userId, tweetToRetweetId) => {
    try {
        await userModel.findByIdAndUpdate(
            userId,
            { $push: { retweets: tweetToRetweetId } },
            { new: true }
        )

        return { status: 200, message: "Retweeted successfully" };
    } catch (error) {
        return { status: 500, message: "Internal server error"};
    };
}