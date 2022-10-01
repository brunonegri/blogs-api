require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const authenticateToken = async (token) => {
    try {
        const authentication = await jwt.verify(token, secret, jwtConfig);
        return authentication;
    } catch (err) {
        return false;
    }
};

const decodeToken = (token) => jwt.decode(token);

module.exports = {
    generateToken,
    authenticateToken,
    decodeToken,
};