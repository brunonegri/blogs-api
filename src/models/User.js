const UsersSchema = (sequelize, DataTypes) => {
    const UsersTable = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING, 
        password: DataTypes.STRING, 
        image: DataTypes.STRING, 
    },{
        underscored: true,
        timestamps: false,
        tableName: 'users'
    });

    UsersTable.associate = (models) => {
        UsersTable.hasMany(models.BlogPost, {
            as: 'blogpost',
            foreignKey: 'userId'
        })
    }
    return UsersTable
}

module.exports = UsersSchema;