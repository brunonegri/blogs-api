const PostsCategorieSchema = (sequelize, DataTypes) => {
    const PostsCategorieTable = sequelize.define('PostCategories', 
    {},{
        underscored: true,
        timestamps: false,
        nameTable: 'posts_categories'
    });

    PostsCategorieTable.associate = (models) => {
        models.BlogPosts.belongsToMany(models.Categories, { through: PostsCategorieTable}),
        models.Categories.belongsToMany(models.BlogPosts, { through: PostsCategorieTable})
    }
    return PostsCategorieTable
}

module.exports = PostsCategorieSchema;