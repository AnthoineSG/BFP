const { Model, DataTypes, literal } = require("sequelize");
const sequelize = require("../connexion/getConnexion")();

class Function extends Model {}

Function.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
        sequelize,
        modelName: "Function",
        tableName: "function",
    }
);

module.exports = Function;