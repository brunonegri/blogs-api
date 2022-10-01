require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const authenticateToken = async (token) => {
    if (!token) {
        const errorObj = { status: 401, message: 'Token not found' };
        throw errorObj;
    }
    try {
        const authentication = await jwt.verify(token, secret, jwtConfig);
        return authentication;
    } catch (err) {
        const errorObj = { status: 401, message: 'Expired or invalid token' };
        throw errorObj;
    }
};

module.exports = {
    generateToken,
    authenticateToken,
};