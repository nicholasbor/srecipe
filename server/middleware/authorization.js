require("dotenv").config();

const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = req.header("token");

        if (!token) {
            return res.status(403).json("Unauthorized to do this action");
        }

        const payload = jwt.verify(token, process.env.SECRETKEY);

        req.id = payload.id;

        next();

    } catch (err) {
        console.error(err.message);
        return res.status(403).json("Unauthorized to do this action");
    }
};