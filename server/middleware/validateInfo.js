
module.exports = async (req, res, next) => {
    function validate_email(email) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    }

    const {email, username, user_password } = req.body;

    const path = req.path;
    if (path == "/register") {
        if (![email, username, user_password].every(Boolean)) {
            return res.status(401).json("Missing information");
        } else if (!validate_email(email)) {
            return res.status(401).json("Invalid email");
        }
    } else if (path == "/login") {
        if (![email, password].every(Boolean)) {
            return res.status(401).json("Missing information");
        } else if (!validate_email(email)) {
            return res.status(401).json("Invalid email");
        }
    }

    next();
};