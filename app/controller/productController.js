const { Product, Category } = require("../models");


async function getAllProduct(req, res) {
    const allProduct = await Product.findAll();
    const allCategory = await Category.findAll();
    res.render("product", { products: allProduct, categorys: allCategory });
}


module.exports = {
    getAllProduct,
};