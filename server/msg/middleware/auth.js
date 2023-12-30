const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: "token not found" });
    }

    jwt.verify(token, `${secretKey}`, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token"})
        }

        req.user = decoded;
        next();
    })
}

module.exports = { verifyToken };