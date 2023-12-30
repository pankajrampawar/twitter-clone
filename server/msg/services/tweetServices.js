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