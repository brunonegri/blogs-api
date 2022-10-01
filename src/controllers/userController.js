const userServices = require('../services/userServices');
const errorHandle = require('../utils/errorHandle');

const insertUser = async (req, res, next) => {
    try {
        const newUserToken = await userServices.insertUser(req.body);
        res.status(201).json(newUserToken);
    } catch (err) {
        next(err);
    }
};

const getUser = async (req, res, next) => {
    try {
        const user = await userServices.getUser();

        return res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userById = await userServices.getUserById(id);
        if (!userById) throw errorHandle(404, 'User does not exist');
        res.status(200).json(userById);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    insertUser,
    getUser,
    getUserById,
};