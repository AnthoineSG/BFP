const Sequelize = require("sequelize"); //! on appelle sequelize pour lui demander de ce connecter

function getConnexion() {
    return new Sequelize( //? on instancie la connection
        process.env.DB_NAME, //* le nom de la bd
        process.env.DB_USER, //* l'utitlisateur de la bd
        process.env.DB_PASSWORD, //* le mdp de la bd
        {
            define: {
                createdAt: "created_at", //? permet de definire des valeur commune mais pas important dans toute les table
                updatedAt: "updated_at",
            },
            host: process.env.HOST, //* l'host de la bd
            dialect: process.env.DB_ENV, //* l'environement de la bd
            logging: true, //! permet d'afficher les requete a la bdd dans le terminal
        }
    );
}

//~ on exporte la connection pour tout les mmodels qui aurront besoin de ce connecter (product, category, ...)
module.exports = getConnexion;