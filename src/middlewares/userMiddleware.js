const errorHandle = require('../utils/errorHandle');
const { userSchema } = require('../utils/joiValidate');

const userMiddleware = async (req, res, next) => {
    const { error } = userSchema.validate(req.body);

    if (error) next(errorHandle(400, error.message));
    next();
};

module.exports = {
    userMiddleware,
};