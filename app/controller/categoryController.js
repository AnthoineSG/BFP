const { Category } = require("../models");


async function getAllCategory(req, res) {
    const allCategory = await Category.findAll();
    res.render("category", { categorys: allCategory });
}

module.exports = {
    getAllCategory,
};