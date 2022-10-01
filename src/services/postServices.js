const { BlogPost, Category, PostCategory, sequelize, User } = require('../models');
const errorHandle = require('../utils/errorHandle');

const insertPost = async (req, userId) => {
    const { title, content, categoryIds } = req;
    const result = await sequelize.transaction(async (t) => {
        const date = new Date();
        const newPost = await BlogPost.create(
            { title, content, userId, categoryIds, published: date, updated: date },
            { transaction: t },
        );

        const idPost = newPost.dataValues.id;
        await Promise.all(categoryIds.map(async (id) => PostCategory
        .create({ postId: idPost, categoryId: id }, { transaction: t })));

        return newPost;
    });

    return result;
};

const getPosts = async () => {
    const posts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return posts;
};

const getPostsById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    if (post === null) throw errorHandle(404, 'Post does not exist');

    return post;
};

const updatePost = async (req, id) => {
    const { content, title } = req;
    const updated = await BlogPost.update({ content, title }, { where: { id } });
    return updated;
};

module.exports = {
    insertPost,
    getPosts,
    getPostsById,
    updatePost,
};