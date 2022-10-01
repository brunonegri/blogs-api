const { Category } = require('../models');
const errorHandle = require('../utils/errorHandle');

const insertCategorie = async (req) => {
    const { name } = req;

    const checkCategory = await Category.findOne({ where: { name } });
    if (checkCategory !== null) throw errorHandle(409, 'Category already registered'); 

    const category = await Category.create({ name });
    return category;
};

const getCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    insertCategorie,
    getCategories,
};