const { Product, Category, User } = require("../models");

async function allProduct(req, res) {
    const users = await User.findAll({
        include: [
            { association: "user_product" },
        ],
        attributes: {
            exclude: [ "created_at", "updated_at" ],
        },
        order: ["firstname"],
    });
    // console.log(users);

    const products = await Product.findAll({
        include: [
            { association: "product_user" },
            { association: "product_function" },
        ],
        order: ["name"]
    });
    console.log(products);
    res.render("homePage", { users, products });
}

module.exports = {
    allProduct,
};