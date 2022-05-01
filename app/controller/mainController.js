const { Product, Category, User } = require("../models");

async function allProduct(req, res) {
    const products = await Product.findAll({
        include: [
            { association: "product_user" },
            { association: "product_function" },
        ],
        order: ["name"]
    });
    // console.log(products);
    res.render("homePage", { products });
}

module.exports = {
    allProduct,
};