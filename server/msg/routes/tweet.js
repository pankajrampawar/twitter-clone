const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');
const { verifyToken } = require('../middleware/jwtMiddleware');

router.post('/postTweet', verifyToken, tweetController.postTweet);
router.put('/updateTweet/:id', verifyToken, tweetController.updateTweet);
router.delete('/deleteTweet/:id', verifyToken, tweetController.deleteTweet);

module.exports = router;
