const { Category } = require('../models');
const errorHandle = require('../utils/errorHandle');

const insertCategorie = async (req) => {
    const { name } = req;

    const checkCategory = await Category.findOne({ where: { name } });
    if (checkCategory !== null) throw errorHandle(409, 'User already registered'); 

    const category = await Category.create({ name });
    return category;
};

module.exports = {
    insertCategorie,
};