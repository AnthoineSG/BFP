const { Product } = require("../models");

function form(req, res) {
    res.render("search");
}

async function getIdProduct (req, res) {
    if (!req.body.id) {
        res.render("search", { error: "Il faut ecrire un nombre !"});
        return;
    }
    const idOfSearch = parseInt(req.body.id);

    try {
        if (!idOfSearch) {
            res.render("search", { error: "C'est un nombre a ecrire !"});
            return;
        }

        const idInBdd = await Product.findOne({ where: { id: idOfSearch } });
        if (!idInBdd) {
            res.render("search", { error: "L'id n'est pas en BDD !"});
            return;
        }

        req.session.idOfSearch = idOfSearch;

        res.redirect("/searchProduct");
    } catch (error) {
        console.error(error);
    }
}

async function resultSearch(req, res) {
    try {
        const idSearch = req.session.idOfSearch;
        const product = await Product.findByPk(idSearch);

        res.render("searchProduct", { product });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    form,
    getIdProduct,
    resultSearch,
};