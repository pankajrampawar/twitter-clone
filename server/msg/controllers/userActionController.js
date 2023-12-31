const userServices = require('../services/userServices');
const tweetServices = require('../services/tweetServices');

exports.retweet = async (req, res) => {
    try {
        const userId = req.userId;
        const tweetToRetweetId = req.params.id;

        const response1 = await tweetServices.updateRetweetCount(tweetToRetweetId);
        const response2 = await userServices.updateRetweetsByUser(userId, tweetToRetweetId);

        res.status(response1.status).json({ messages: `${response1.message} && ${response2.message}` });
    } catch (error) {
        res.status(500).json({ message: "internal server error", error });
    }
}