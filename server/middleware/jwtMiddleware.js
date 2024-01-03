const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ message: "token not found" });
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer') {
        return res.status(400).json("invalid header format");
    }

    jwt.verify(token, `${process.env.JWT_SECRET_KEY}`, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token"})
        }

        req.userId = decoded.userId;
        next();
    })
}

module.exports = { verifyToken };