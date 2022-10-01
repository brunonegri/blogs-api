const { postSchema } = require('../utils/joiValidate');
const errorHandle = require('../utils/errorHandle');

const postMiddlware = async (req, res, next) => {
    const { error } = postSchema.validate(req.body);
    if (error) {
        next(errorHandle(400, 'Some required fields are missing'));
    }
    next();
};

module.exports = postMiddlware;