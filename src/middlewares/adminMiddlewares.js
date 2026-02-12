function adminMiddleware(req, res, next) {
    if (req.user?.role !== "admin") {
        return res.status(403).json({ message: "access denied, only admin" })
    }

    return next();
}

module.exports = adminMiddleware;