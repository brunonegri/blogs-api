const BlogPostsSchema = (sequelize, DataTypes) => {
    const BlogPostsTable = sequelize.define('blog_posts', {
        id: {
            type: DataTypes.INTERGER,
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
    });

    BlogPostsTable.associate = (models) => {
        BlogPostsTable.belongsTo(models.users, {
            as: 'users',
            foreignKey: 'userId'
        })
    }
    return BlogPostsTable
}

module.exports = BlogPostsSchema;