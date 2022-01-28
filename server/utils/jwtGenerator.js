require("dotenv").config();

const jwt = require("jsonwebtoken");

function jwtGenerator(u_id) {
    return jwt.sign({id: u_id}, process.env.SECRETKEY, {expiresIn: '1hr'});
}

module.exports = jwtGenerator;