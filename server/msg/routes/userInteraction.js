const express = require('express');
const router = express.Router();
const userActionController = require('../controllers/userActionController');
const { verifyToken } = require('../middleware/jwtMiddleware');

router.post('/updateBio', verifyToken, userActionController.updateBio);

module.exports = router;