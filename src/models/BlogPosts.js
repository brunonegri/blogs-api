const BlogPostsSchema = (sequelize, DataTypes) => {
    const BlogPostsTable = sequelize.define('BlogPosts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING, 
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        published: DataTypes.DATE,
        updated: DataTypes.DATE,
    },{
        underscored: true,
        timestamps: false,
        tablename: 'blog_posts'
    });

    BlogPostsTable.associate = (models) => {
        BlogPostsTable.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'userId'
        })
    }
    return BlogPostsTable
}

module.exports = BlogPostsSchema;