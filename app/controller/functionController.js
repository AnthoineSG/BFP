const { Function } = require("../models");

async function getAllFunction(req, res) {
    const functions = await Function.findAll();
    res.render("function", { functions });
}

module.exports = {
    getAllFunction,
};