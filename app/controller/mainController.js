const { Product } = require("../models");

const dayjs = require("dayjs");

async function allProduct(req, res) {
    try {
        const products = await Product.findAll({
            include: [
                { association: "product_user" },
                { association: "product_function" },
            ],
            order: ["name"]
        });
    
        const date = dayjs().format("[Nous somme le] DD/MM/YYYY [et il est] HH:mm");
    
        res.render("homePage", { products, date });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    allProduct,
};