const UsersSchema = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING, 
        password: DataTypes.STRING, 
        image: DataTypes.STRING, 
    },{
        underscored: true,
        tableName: 'users'
    });

    UsersTable.associate = (models) => {
        UsersTable.hasMany(models.BlogPosts, {
            as: 'blog_posts',
            foreignKey: 'userId'
        })
    }
    return UsersTable
}

module.exports = UsersSchema;