const { Sequelize, Model, DataTypes, literal } = require("sequelize");
const sequelize = require("./getConnexion")();

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: sequelize,
        tableName: "category",
        modelName: "Category",
    }
);

module.exports = Category;