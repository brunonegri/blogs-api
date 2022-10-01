const PostsCategorieSchema = (sequelize, DataTypes) => {
    const PostsCategorieTable = sequelize.define('PostCategory', 
    {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
        }
    },{
        underscored: true,
        timestamps: false,
        tableName: 'posts_categories'
    });

    PostsCategorieTable.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostsCategorieTable,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPost',
            through: PostsCategorieTable,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    }
    return PostsCategorieTable
}

module.exports = PostsCategorieSchema;