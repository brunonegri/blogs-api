const categoriesServices = require('../services/categoriesServices');

const insertCategorie = async (req, res, next) => {
    try {
        const category = await categoriesServices.insertCategorie(req.body);
        res.status(201).json(category);
    } catch (err) {
        next(err);
    }
};

const getCategories = async (req, res, next) => {
    try {
        const category = await categoriesServices.getCategories();
        res.status(200).json(category);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    insertCategorie,
    getCategories,
};