const BlogPostsSchema = (sequelize, DataTypes) => {
    const BlogPostsTable = sequelize.define('BlogPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        tableName: 'blog_posts'
    });

    BlogPostsTable.associate = (models) => {
        BlogPostsTable.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'userId'
        })
    }
    return BlogPostsTable
}

module.exports = BlogPostsSchema;