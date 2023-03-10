const { User } = require('../models');
const { generateToken } = require('../utils/JWTToken');
const errorHandle = require('../utils/errorHandle');

const insertUser = async (req) => {
    const { displayName, email, password, image } = req;

    const checkUser = await User.findOne({ where: { email } });
    if (checkUser !== null) throw errorHandle(409, 'User already registered'); 

    const user = await User.create({ displayName, email, password, image });

    const payload = { userID: user.id, userName: user.displayName };

    const token = generateToken(payload);
    return { token };
};

const getUser = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getUserById = async (id) => {
    const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    return user;
};

module.exports = {
    insertUser,
    getUser,
    getUserById,
};