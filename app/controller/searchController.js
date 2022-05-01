const { Product } = require("../models");

function form(req, res) {
    res.render("search");
}

function getIdProduct (req, res) {
    const idOfSearch = req.body.id;
    req.session.idOfSearch = idOfSearch;
    res.redirect("/searchProduct");
}

async function resultSearch(req, res) {
    const idSearch = req.session.idOfSearch;
    console.log(idSearch);
    const product = await Product.findByPk(idSearch);

    res.render("searchProduct", { product });
}


module.exports = {
    form,
    getIdProduct,
    resultSearch,
};