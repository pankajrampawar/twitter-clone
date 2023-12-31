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

exports.updateBio = async (req, res) => {
    try {
        const userId = req.userId;
        const updatedBio = req.body.bio;

        const response = await userServices.updateUserBio(userId, updatedBio);

        res.status(response.status).json({ user: response.user, message: response.message })
    } catch (error) {
        res.status(500).json(error);
    };
}

exports.bookmark = async (req, res) => {
    try {
        const userId = req.userId;
        const tweetToBookmarkId = req.params.id;

        const response = await userServices.updateBookmark(userId, tweetToBookmarkId);

        res.status(response.status).json({ message: response.message, user: response.user });
    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    };
}