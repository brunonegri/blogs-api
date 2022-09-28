const PostsCategorieSchema = (sequelize, DataTypes) => {
    const PostsCategorieTable = sequelize.define('posts_categories', 
    {},{
        underscored: true,
        timestamps: false,
    });

    // PostsCategorieTable.associate = (models) => {
    //     models.blogPosts.belongsToMany(models.categories, { through: PostsCategorieTable}),
    //     models.categories.belongsToMany(models.blogPosts, { through: PostsCategorieTable})
    // }
    return PostsCategorieTable
}

module.exports = PostsCategorieSchema;