// ! on importe les fichiers (../models/index.js) permetant la connection a la bdd grace a sequelize
const { Product, Category } = require("../models");

async function getAllProduct(req, res) {
    // ^ on recupere tout les produit grace a la methode sequelize findAll qui fait (SELECT * FROM "product";)
    const allProduct = await Product.findAll();

    // ^ on recupere toutes les categories grace a la methode sequelize findAll qui fait (SELECT * FROM "category";)
    const allCategory = await Category.findAll();

    res.render("product", { // & on passe nos resulta a la views
        products: allProduct,
        categorys: allCategory
    });
}

// ~ les fichier exporter vont au router
module.exports = {
    getAllProduct,
};