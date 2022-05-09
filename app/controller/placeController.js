const { Place } = require("../models");

async function getAllPlace(req, res) {
    const places = await Place.findAll();
    res.render("place", { places });
}

async function placeById(req, res) {
    try {
        const id = parseInt(req.params.id);
        if (!id) {
            res.redirect("/");
            return;
        }
        const placeId = await Place.findByPk(id, {
            include: [
                { association: "place_product" },
            ]
        });
        if (!placeId) {
            res.render("placeId", { error: "L'id de ce lieux n'existe pas !", placeId: false });
            return;
        }


        res.render("placeId", { placeId });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllPlace,
    placeById,
};