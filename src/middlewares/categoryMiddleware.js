const errorHandle = require('../utils/errorHandle');
const { categorySchema } = require('../utils/joiValidate');
const { Category } = require('../models');

const categoryMiddleware = async (req, res, next) => {
    const { error } = categorySchema.validate(req.body);
    if (error) next(errorHandle(400, error.message));
    next();
};

const checkCategory = async (req, res, next) => {
    const { categoryIds } = req.body;
    
    const validateCategory = await (await Promise.all(categoryIds.map((e) => 
    Category.findOne({ where: e })))).every((e) => e !== null);

    if (!validateCategory) next(errorHandle(400, '"categoryIds" not found')); 
    next();
};

module.exports = { categoryMiddleware, checkCategory };
