// ! on importe les fichiers (../models/index.js) permetant la connection a la bdd grace a sequelize
const { Product, Category, Function } = require("../models");

async function getAllProduct(req, res) {
    // ^ on recupere tout les produit grace a la methode sequelize findAll qui fait (SELECT * FROM "product";)
    const allProduct = await Product.findAll();

    res.render("product", { // & on passe nos resulta a la views
        products: allProduct,
    });
}

async function productWithFunction(req, res) {
    const products = await Product.findAll({ //? on recupere tout les produits
        where: { function_id: 1}, //? qui ont la fonction_id = 1 (manger)
        include: Function, //? et on appelle Function pour la liee a la table Product
    });

    res.render("productFunction", { products });
}

// ~ les fichier exporter vont au router
module.exports = {
    getAllProduct,
    productWithFunction,
};