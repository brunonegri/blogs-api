require('dotenv').config();
const loginServices = require('../services/loginServices');

const loginRequest = async (req, res, next) => {
    try {
        const userToken = await loginServices.loginRequest(req.body);
        return res.status(200).json(userToken);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    loginRequest,
};