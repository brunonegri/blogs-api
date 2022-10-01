const userServices = require('../services/userServices');

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
        const auth = await userServices.getUser();

        req.user = auth;
        return res.status(200).json(auth);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    insertUser,
    getUser,
};