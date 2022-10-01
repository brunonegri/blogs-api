const errorHandle = require('../utils/errorHandle');
const { authenticateToken } = require('../utils/JWTToken');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) res.status(401).json({ message: 'Token not found' });  
    const user = await authenticateToken(token);

    if (!user) return next(errorHandle(401, 'Expired or invalid token'));
    next();
};

module.exports = authMiddleware;