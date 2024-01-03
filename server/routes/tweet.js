const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');
const userActionController = require('../controllers/userActionController');
const { verifyToken } = require('../middleware/jwtMiddleware');

router.get('/getTweets', verifyToken, tweetController.getTweets);
router.post('/postTweet', verifyToken, tweetController.postTweet);
router.put('/updateTweet/:id', verifyToken, tweetController.updateTweetContent);
router.delete('/deleteTweet/:id', verifyToken, tweetController.deleteTweet);
router.put('/like/:id', verifyToken, tweetController.likeTweet);
router.put('/retweet/:id', verifyToken, userActionController.retweet);


module.exports = router;

