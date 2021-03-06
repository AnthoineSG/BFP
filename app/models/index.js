//! THE Place To Be pour tout les models qui ont des jointure
//! on appelle tout les modells 1 par 1
const Product = require("./tables/product");
const Category = require("./tables/category");
const Function = require("./tables/function");
const Place = require("./tables/place");
const User = require("./tables/user");

//? association product et function
//* product a function_id
//* function a rien
//! un product "appartient a" une fonction
Product.belongsTo(Function, {
    as: "product_function",
    foreignKey: "function_id",
});
//! une function "a plusieurs" produits
Function.hasMany(Product, {
    as: "function_product",
    foreignKey: "function_id"
});

//? association entre Product et User
//* produit a un user
//*user a un ou plusieur produit
//! un produit "appartient a" utilisateur
Product.belongsTo(User, {
    as: "product_user",
    foreignKey: "user_id",
});
//! un user "a plusieur" produits
User.hasMany(Product, {
    as: "user_product",
    foreignKey: "user_id",
});

//? association product et place
//* un produit est dans une ou plusieur piece
//* une piece a un ou plusieur produit
//! un produit "appartient à beaucoup" de lieu
Product.belongsToMany(Place, {
    as: "product_place",
    through: "product_has_place",
    foreignKey: "place_id",
    otherKey: "product_id",
});
//! un lieu "appartient à beaucoup" de produits
Place.belongsToMany(Product, {
    as: "place_product",
    through: "product_has_place",
    foreignKey: "product_id",
    otherKey: "place_id",
});

//? association entre product et category
//* un produit a une ou plusieur categorie
//* une categorie a un ou plusieur produit
//! un produit "appartient à beaucoup" de category
Product.belongsToMany(Category, {
    as: "product_category",
    through: "product_has_category",
    foreignKey: "category_id",
    otherKey: "product_id",
});
//! une categorie "appartient à beaucoup" de produits
Category.belongsToMany(Product, {
    as: "category_product",
    through: "product_has_category",
    foreignKey: "product_id",
    otherKey: "category_id",
});

//~ les models sont exporter vert les controller
module.exports = {
    Product,
    Category,
    Function,
    Place,
    User,
};