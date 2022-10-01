const PostsCategorieSchema = (sequelize, DataTypes) => {
    const PostsCategorieTable = sequelize.define('PostCategories', 
    {},{
        underscored: true,
        timestamps: false,
        nameTable: 'posts_categories'
    });

    PostsCategorieTable.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, { through: PostsCategorieTable}),
        models.Category.belongsToMany(models.BlogPost, { through: PostsCategorieTable})
    }
    return PostsCategorieTable
}

module.exports = PostsCategorieSchema;