const { Sequelize, Model, DataTypes, literal } = require("sequelize");

const sequelize = require("./getConnexion")();


class Product extends Model {}

Product.init(
    {
        id: {
            type: Sequelize.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING
        },
        user_id: DataTypes.INTEGER,
        function_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelize,
        tableName: "product",
        modelName: "Product",
    }
);

module.exports = Product;