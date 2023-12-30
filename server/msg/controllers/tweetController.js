const TweetModel = require('../models/Tweet');
const tweetServices = require('../services/tweetServices')
const userServices = require('../services/userServices');
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
    }
    
}