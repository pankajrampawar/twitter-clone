const TweetModel = require('../models/Tweet');

exports.postTweet = async (newTweet, userId) => {
    const tweetToPost = new TweetModel({
        user: userId,
        content: newTweet.content,
    })

    return tweetToPost.save()
}

exports.updateTweet = async (updatedContent, tweetId) => {
    try {
        await TweetModel.findByIdAndUpdate(
            tweetId,
            {$set: { content: updatedContent}},
            { new: true }
        );
        return { status: 200, message: "tweet updated", content: updatedContent}
    } catch (error) {
        return { message: "error", error};
    }
}

exports.deleteTweet = async (tweetId) => {
    try {
        const deletedTweet = await TweetModel.findByIdAndDelete(tweetId);

        if (!deletedTweet) {
            return {status: 404, message: "tweet not found for deletion"};
        }

        return { status: 200, message: "tweet Deleted Successfully"};
    } catch (error){
        return { message: "error deleting the data", error};
    }
}