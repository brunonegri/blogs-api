const postServices = require('../services/postServices');

const insertPost = async (req, res, next) => {
    try {
        const { id } = req.user;
        console.log(id);
        const post = await postServices.insertPost(req.body, id);
        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
};

// const getCategories = async (req, res, next) => {
//     try {
//         const category = await categoriesServices.getCategories();
//         res.status(200).json(category);
//     } catch (err) {
//         next(err);
//     }
// };

module.exports = {
    insertPost,
};