const loginServices = require('../services/loginServices');

const loginRequest = async (req, res) => {
    const response = await loginServices.loginRequest(req.body);
    return res.status(200).json(response);
};

module.exports = {
    loginRequest,
};