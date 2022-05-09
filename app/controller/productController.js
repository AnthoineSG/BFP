// ! on importe les fichiers (../models/index.js) permetant la connection a la bdd grace a sequelize
const { Product, User, Place, Category, Function } = require("../models");

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
    const idProduct = parseInt(req.params.id);
    if (!idProduct) {
        res.render("oneProduct", { error: "Les produits sont ranger par nombre !"});
        return;
    }

    try {
        const oneProduct = await Product.findByPk(idProduct);
        if (!oneProduct) {
            res.render("oneProduct", { error: "Le produit choisie n'existe pas"});
            return;
        }
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

async function form(req, res) {
    try {
        const users = await User.findAll();
        const places = await Place.findAll();
        const categorys = await Category.findAll();
        const fonctions = await Function.findAll();
        res.render("productAdd", { users, places, categorys, fonctions });
    } catch (error) {
        console.error(error);
    }
}
async function addProduct(req, res) {
    try {
        const { name, user, place, fonction, category } = req.body;

        const newProduct = new Product({
            name: name,
            user_id: user,
            function_id: fonction,
        });
        await newProduct.save();

        // const lastProduct = await Product.findOne({
        //     order: [["id", "DESC"]],
        // });

        // const newProductPlace = new product_has_place({
        //     place_id: place,
        //     product_id: lastProduct.id,
        // });

        // console.log(newProductPlace);


        const users = await User.findAll();
        const places = await Place.findAll();
        const categorys = await Category.findAll();
        const fonctions = await Function.findAll();
        res.render("productAdd", { users, places, categorys, fonctions });
    } catch (error) {
        console.error(error);
    }
}







// ~ les fichier exporter vont au router
module.exports = {
    getAllProduct,
    getOneProduct,
    productHasFunction,
    form,
    addProduct,
};