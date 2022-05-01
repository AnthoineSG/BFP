// ! on importe les fichiers (../models/index.js) permetant la connection a la bdd grace a sequelize
const { Product, Function, Category, User, Place } = require("../models");

async function getAllProduct(req, res) {
    // ^ on recupere tout les produit grace a la methode sequelize findAll qui fait (SELECT * FROM "product";)
    const allProduct = await Product.findAll();

    res.render("product", { // & on passe nos resulta a la views
        products: allProduct,
    });
}


async function getOneProduct(req, res) {
    const idProduct = req.params.id;
    const oneProduct = await Product.findByPk(idProduct);
    res.render("oneProduct", { oneProduct });
}



// async function productWithFunction(req, res) {
//     const products = await Product.findOne({ //? on recupere tout les produits
//         where: { function_id: 1}, //? qui ont la fonction_id = 1 (manger)
//         include: Function, //? et on appelle Function pour la liee a la table Product
//     });
async function productWithFunction(req, res) {
    try {
        const products = await Product.findAll({
            where: { function_id: 1 },
            include: "product_function",
        });
        res.render("productFunction", { products });
    } catch (error) {
        console.error("++++++++++++++++++++++++++++++++" + error);
    }
}

// ~ les fichier exporter vont au router
module.exports = {
    getAllProduct,
    getOneProduct,
    productWithFunction,
};