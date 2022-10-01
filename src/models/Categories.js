const CategoriesSchema = (sequelize, DataTypes) => {
    const CategoriesTable = sequelize.define('Categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
    },{
        underscored: true,
        timestamps: false,
        nameTable: 'categories'
    });
    return CategoriesTable
}

module.exports = CategoriesSchema;