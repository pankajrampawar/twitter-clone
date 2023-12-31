const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Number
    },
    reposts: {
        type: Number
    },
    retweetsCount: {
        type: Number
    }
});

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet; 