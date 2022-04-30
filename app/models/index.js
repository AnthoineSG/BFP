//! THE Place To Be pour tout les models qui ont des jointure
//! on appelle tout les modells 1 par 1
const Product = require("./product");
const Category = require("./category");
const Function = require("./function");



//? association product et function
//* product a function_id
//* function a rien

//! un product "appartient a" un fonction
Product.belongsTo(Function, {
    foreignKey: "function_id",
});

//! une function "a plusieurs" produits
Function.hasMany(Product, {
    foreignKey: "function_id"
});





//~ les models sont exporter vert les controller
module.exports = {
    Product,
    Category,
    Function,
};