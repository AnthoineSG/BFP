const express = require("express");
const router = express.Router();

const mainController = require("../controller/mainController");
const userController = require("../controller/userController");
const placeController = require("../controller/placeController");
const searchController = require("../controller/searchController");
const productController = require("../controller/productController");
const vanillaController = require("../controller/vanillaController");
const categoryController = require("../controller/categoryController");
const functionController = require("../controller/functionController");

// & route de la homePage
router.get("/", mainController.allProduct);

// & route des produits
router.get("/product", productController.getAllProduct);
router.get("/product/:id", productController.getOneProduct);
router.get("/product/sertpour/function", productController.productHasFunction);

//& route des categories
router.get("/category", categoryController.getAllCategory);

//& route pour les function
router.get("/function", functionController.getAllFunction);

//&route pour les place
router.get("/place", placeController.getAllPlace);

//& route pour les user
router.get("/user", userController.getAllUser);
router.get("/user/form", userController.form);
router.post("/user/form", userController.addUser);

//& route demo js vanilla
router.get("/vanilla", vanillaController.vanilla);

//& route de recherche de produit
router.get("/search", searchController.form);
router.post("/search", searchController.getIdProduct);
router.get("/searchProduct", searchController.resultSearch);

// ~ le router est exporter vers l'index du server
module.exports = router;