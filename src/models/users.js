const UsersSchema = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define('Users', {
        id: {
            type: DataTypes.INTERGER,
            primaryKey: true
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING, 
        password: DataTypes.STRING, 
        image: DataTypes.STRING, 
    },{
        underscored: true
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