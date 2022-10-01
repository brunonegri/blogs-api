const CategoriesSchema = (sequelize, DataTypes) => {
    const CategoriesTable = sequelize.define('Category', {
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