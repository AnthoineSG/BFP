//! on importe les objets de sequelize qui nous interesse pour cree notre instance
const { Sequelize, Model, DataTypes, literal } = require("sequelize");
//! on appelle la connection et ON OUBLIE PAS D'EXECUTER LA FONTION avec les () a la fin
const sequelize = require("./getConnexion")();

//? on intancie notre classe avec comme parent Model
class Product extends Model {}

//? on initialise la class
Product.init(
    { //! on redefini la table pour etre bien sur de ce qu'on appelle en BDD
        id: {
            type: DataTypes.INTEGER, //^ DataTypes ou Sequelize font la meme chose
            unique: true, //* l'id est unique
            autoIncrement: true, //* il est SERIAL/GENERTED BY DEFAULT
            primaryKey: true, //* c'est la cle primaire de la table
        },
        name: {
            type: DataTypes.STRING, //* on precise que c'est du text
            allowNull: false, //* ce champ est NOT NULL
        },
        user_id: {
            type: DataTypes.INTEGER, //* on precise que c'est un nombre
            allowNull: false, //* ce champ est NOT NULL
        },
        function_id: {
            type: DataTypes.INTEGER, //* on precise que c'est un nombre
            allowNull: false, //* ce champ est NOT NULL
        },
        created_at: {
            type: DataTypes.DATE, //* on precise que c'est une date
            allowNull: false, //* ce champ est NOT NULL
            defaultValue: literal("CURRENT_TIMESTAMP"), //! c'est comme ça je sais plus pourquoi
        },
        updated_at: {
            type: Sequelize.DATE, //^ on change un peu de DataTypes a Sequelize
            allowNull: true, //^ ce champ peut etre vide (NULL)
        }
    },
    {
        sequelize: sequelize, //! on precise que cette instance va ce connecter a la BDD du fichier "getConnexion"
        tableName: "product", //* on precise bien le nom de la table pour eviter les ambiguïté
        modelName: "Product", //* on precise bien le nom de l'instance au model
    }
);

//~ on exporte cette instance vers l'index des Models
module.exports = Product;