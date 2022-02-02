const router = require("express").Router();
const pool = require("../db/db")
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator")
const authorize = require("../middleware/authorization");

// Register a new user
router.post("/register", async (req, res) => {
    try {
        const { full_name, username, email, user_password } = req.body;
        
        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1", 
            [email]
        );

        if (user.rows.length !== 0) {
            return res.status(401).send("User exists");
        }

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const hash = await bcrypt.hash(user_password, salt);

        const new_user = await pool.query(
            "INSERT INTO users (full_name, username, email, user_password) VALUES ($1, $2, $3, $4) RETURNING *", 
            [full_name, username, email, hash]
        );

        const token = jwtGenerator(new_user.rows[0].u_id);

        res.json({token});

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Log in
router.post("/login", async (req, res) => {
    try {
        const { email, user_password } = req.body;

        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (user.rows.length === 0) {
            return res.status(401).send("Provided email is incorrect");
        }

        const valid_pass = await bcrypt.compare(user_password, user.rows[0].user_password);

        if (!valid_pass) {
            return res.status(401).send("Provided password is incorrect");
        }

        const token = jwtGenerator(user.rows[0].u_id);

        res.json({ token });

    } catch (err) {
        console.error(err.messgae);
        res.status(500).send("Server Error");
    }
});

router.get("/verify", authorize, async(req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.error(err.messgae);
        res.status(500).send("Server Error");
    }
});

module.exports = router;