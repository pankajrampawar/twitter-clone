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
    };
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

exports.updateUserBio = async (userId, updatedBio) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $set: { bio: updatedBio }},
            { new: true}
        )
        return {status: 200, message: "Bio updated successfully", user: updatedUser};
    } catch (error) {
        return { satus: 500, message: "Unable to update bio, please try again later", error};
    };
}

exports.updateUserBookmark = async (userId, tweetToBookmarkId) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $push: { bookmarks: tweetToBookmarkId }},
            { new: true }
        )
        
        return { status: 200, message: "tweet Bookmarked successfully", user: updatedUser };
    } catch (error) {
        return { status: 500, message: "unable to bookmark, please try again later", error };
    };
}