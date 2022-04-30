const { Product } = require("../models");


async function getAllProduct(req, res) {
    const allProduct = await Product.findAll();
    res.render("product", { products: allProduct });
}


module.exports = {
    getAllProduct,
};