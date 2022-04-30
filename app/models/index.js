//! THE Place To Be pour tout les models qui ont des jointure
//! on appelle tout les modells 1 par 1
const Product = require("./product");
const Category = require("./category");

//~ les models sont exporter vert les controller
module.exports = {
    Product,
    Category,
};