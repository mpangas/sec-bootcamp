const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer')) return res.sendStatus(401);
    console.log(authHeader); // Bearer Token
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err) return res.sendStatus(403); // invalid token
            req.user = decoded.username;
            req.roles = decoded.UserInfo.roles;
            next();
        },
    );
};

module.exports = verifyJWT;