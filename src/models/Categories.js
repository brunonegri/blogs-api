const CategoriesSchema = (sequelize, DataTypes) => {
    const CategoriesTable = sequelize.define('categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
    },{
        underscored: true,
        timestamps: false,
    });
    return CategoriesTable
}

module.exports = CategoriesSchema;