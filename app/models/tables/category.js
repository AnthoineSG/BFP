const { Model, DataTypes, literal } = require("sequelize");
const sequelize = require("../connexion/getConnexion")();

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
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        }
    },
    {
        sequelize: sequelize,
        tableName: "category",
        modelName: "Category",
    }
);

module.exports = Category;