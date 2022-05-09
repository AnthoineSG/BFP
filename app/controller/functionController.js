const { Function } = require("../models");

async function getAllFunction(req, res) {
    try {
        const functions = await Function.findAll();
        res.render("function", { functions });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllFunction,
};