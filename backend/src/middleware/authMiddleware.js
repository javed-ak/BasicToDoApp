const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({
            msg: "Token not found!"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(401).json({
            msg: "Invalid token"
        });
    }
}

module.exports = authMiddleware;