const { Place } = require("../models");

async function getAllPlace(req, res) {
    const places = await Place.findAll();
    res.render("place", { places });
}

module.exports = {
    getAllPlace,
};