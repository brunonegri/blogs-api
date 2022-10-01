const postServices = require('../services/postServices');

const insertPost = async (req, res, next) => {
    try {
        const { userID } = req.user;
        const post = await postServices.insertPost(req.body, userID);
        console.log(post);
        res.status(201).json(post);
    } catch (err) {
        next(err);
    }
};

const getPosts = async (req, res, next) => {
    try {
        const posts = await postServices.getPosts();
        res.status(200).json(posts);
    } catch (err) {
        next(err);
    }
};

const getPostsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await postServices.getPostsById(id);
        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
};

const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        await postServices.updatePost(req.body, id);
        const post = await postServices.getPostsById(id);
        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    insertPost,
    getPosts,
    getPostsById,
    updatePost,
};