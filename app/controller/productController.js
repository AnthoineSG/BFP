// ! on importe les fichiers (../models/index.js) permetant la connection a la bdd grace a sequelize
const { Product } = require("../models");

async function getAllProduct(req, res) {
    try {
        // ^ on recupere tout les produit grace a la methode sequelize findAll qui fait (SELECT * FROM "product";)
        const allProduct = await Product.findAll();
    
        res.render("product", { // & on passe nos resulta a la views
            products: allProduct,
        });
    } catch (error) {
        console.error(error);
    }
}

async function getOneProduct(req, res) {
    try {
        const idProduct = req.params.id;
        const oneProduct = await Product.findByPk(idProduct);
        res.render("oneProduct", { oneProduct });
    } catch (error) {
        console.error(error);
    }
}

async function productHasFunction(req, res) {
    try {
        const products = await Product.findAll({
            where: { function_id: 1 },
        });
        res.render("productFunction", { products });
    } catch (error) {
        console.error(error);
    }
}

// ~ les fichier exporter vont au router
module.exports = {
    getAllProduct,
    getOneProduct,
    productHasFunction,
};