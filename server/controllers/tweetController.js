const tweetServices = require('../services/tweetServices')
const userServices = require('../services/userServices');

// to get tweets on home page
exports.getTweet = async (req, res) => {
    try {
        const userId = req.userId;

        const response = await tweetServices.getAllTweets(userId, 1);

        res.status(200).json({ message: response.message, tweets: response.tweets });
    } catch (error) {   
        res.status(500).json({ message: "Internal server error, please try again later", error});
    }
};

// to post a tweet
exports.postTweet = async (req, res) => {
    try {
        const newTweet = req.body;
        const userId = req.userId; 
        
        const response = await tweetServices.postTweet(newTweet, userId);
        const response2 = await userServices.updateUser(userId, response._id);
    
        console.log('tweeted successfully!', response);
        res.status(200).json({message: "tweeted woho!", response});
    } catch (error) {
        console.error('Internal server error', error);
        res.status(500).json({ message: "Failed to tweet, Internal server error, please try again later" });
    };
}

exports.updateTweetContent = async (req, res) => {
    try {
        const tweetId = req.params.id;
        const updatedContent = req.body.content;
        const response = await tweetServices.updateTweet(updatedContent, tweetId);

        res.status(response.status).json({
            response: response.message, 
            content: response.content
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error})
    };
}

exports.deleteTweet = async (req, res) => {
    try {
        const tweetId = req.params.id;
        
        const response = await tweetServices.deleteTweet(tweetId);
        
        res.status(response.status).json({ message: response.message });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error});
    }
}

exports.likeTweet = async (req, res) => {
    try {
        const tweetId = req.params.id;

        const response = await tweetServices.likeTweet(tweetId);

        res.status(response.status).json({message: response.message, tweet: response.tweet})
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}

