const errorHandle = require('../utils/errorHandle');
const { categorySchema } = require('../utils/joiValidate');

const categoryMiddleware = async (req, res, next) => {
    const { error } = categorySchema.validate(req.body);
    if (error) next(errorHandle(400, error.message));
    next();
};

module.exports = categoryMiddleware;
