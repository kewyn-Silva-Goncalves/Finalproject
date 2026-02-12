const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
        res.status(401).json({ message: "Token not informed" });
    }

    const Token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(Token, process.env.JWT_SECRET)
        req.user = decoded;

        return next();
    } catch (error) {
        return res.status(401).json({ message: "invalid token" });
    }
}

module.exports = authMiddleware;