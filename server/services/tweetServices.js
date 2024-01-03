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

exports.likeTweet = async (tweetId) => {
    try {
        const updatedTweet = await TweetModel.findByIdAndUpdate(
            tweetId,
            { $inc: { likes : 1 } },
            { new: true }
        )

        if (!updatedTweet) {
            return { status: 404, message: "Tweet not found" };
        }

        return { status: 200, message: "Liked the tweet", tweet: updatedTweet };
    } catch (error) {
        return { message: "internal server error", error};
    }
}

exports.updateRetweetCount = async (tweetRetweetedId) => {
    try {
        await TweetModel.findByIdAndUpdate(
            tweetRetweetedId,
            { $inc: { retweetsCount: 1 } },
            { new: true }
        )

        return { status: 200, message: "tweet updated successfully" };
    } catch (error) {
        return { status: 500, message: "failed to retweet"}
    }
};

exports.getAllTweets = async (userId, tweetCount) => {
    try {
        const tweets = await TweetModel
            .find({ userId: { $ne: userId } })
            .sort({ createdAt: -tweetCount }) // latest first
            .limit(6) // limits to 6

        return { status: 200, message: "tweets fetched successfully", tweets };
    } catch (error) {
        return { status: 200, message: "Error fetching tweets", error };
    }
}