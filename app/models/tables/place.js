const { Model, DataTypes, literal } = require("sequelize");
const sequelize = require("../connexion/getConnexion")();

class Place extends Model {}

Place.init(
    {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
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
        tableName: "place",
        modelName: "Place",
    }
);

module.exports = Place;