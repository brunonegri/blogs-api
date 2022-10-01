const { BlogPost } = require('../models');
// const errorHandle = require('../utils/errorHandle');

const insertPost = async (req) => {
    const { name } = req;

    // const checkCategory = await BlogPost.findOne({ where: { name } });
    // if (checkCategory !== null) throw errorHandle(409, 'Category already registered'); 

    const category = await BlogPost.create({ name });
    return category;
};

// const getCategories = async () => {
//     const categories = await Category.findAll();
//     return categories;
// };

module.exports = {
    insertPost,
    // getCategories,
};