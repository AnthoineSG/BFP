const { Place } = require("../models");

async function getAllPlace(req, res) {
    const places = await Place.findAll();
    res.render("place", { places });
}

async function placeById(req, res) {
    const id = req.params.id;
    const placeId = await Place.findByPk(id, {
        include: [
            { association: "place_product" },
        ]
    });

    res.render("placeId", { placeId });
}

module.exports = {
    getAllPlace,
    placeById,
};