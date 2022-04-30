const Sequelize = require("sequelize");

function getConnexion() {
    return new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            define: {
                createdAt: "created_at",
                updatedAt: "updated_at",
            },
            host: process.env.HOST,
            dialect: process.env.DB_ENV,
            logging: true,
        }
    );
}

module.exports = getConnexion;