const TweetModel = require('../models/Tweet');
const tweetServices = require('../services/tweetServices')

exports.createTweet = async (req, res) => {
    try {
        const newTweet = req.body; 
        const response = await tweetServices.postTweet(newTweet);
        console.log('tweeted successfully!');
        res.status(response.status).json({message: response.message});
    } catch (error) {
        console.error('Internal server error', error);
        res.status(500).json({ message: "Failed to tweet, Internal server error, please try again later" });
    }
    
}