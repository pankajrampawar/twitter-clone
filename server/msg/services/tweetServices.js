const TweetModel = require('../models/Tweet');

exports.postTweet = async (newTweet, userId) => {
    const tweetToPost = new TweetModel({
        user: userId,
        content: newTweet.content,
    })

    return tweetToPost.save()
}