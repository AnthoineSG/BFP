const { Category } = require("../models");

async function getAllCategory(req, res) {
    try {
        const allCategory = await Category.findAll();
        res.render("category", { categorys: allCategory });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllCategory,
};