const { postSchema, updatePostSchema } = require('../utils/joiValidate');
const postServices = require('../services/postServices');
const { decodeToken } = require('../utils/JWTToken');
const errorHandle = require('../utils/errorHandle');

const postMiddlware = async (req, res, next) => {
    const { error } = postSchema.validate(req.body);
    if (error) {
        next(errorHandle(400, 'Some required fields are missing'));
    }
    next();
};

const updateMiddlware = async (req, res, next) => {
    const { error } = updatePostSchema.validate(req.body);
    if (error) {
        next(errorHandle(400, 'Some required fields are missing'));
    }
    const token = req.header('Authorization');
    const { userID } = decodeToken(token);
    const { id } = req.params;
    const post = await postServices.getPostsById(id);

    if (post.userId !== userID) next(errorHandle(401, 'Unauthorized user'));

    next();
};

module.exports = { postMiddlware, updateMiddlware };