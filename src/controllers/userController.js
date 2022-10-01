const userServices = require('../services/userServices');

const insertUser = async (req, res, next) => {
    try {
        const newUserToken = await userServices.insertUser(req.body);
        console.log(newUserToken);
        res.status(201).json(newUserToken);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    insertUser,
};