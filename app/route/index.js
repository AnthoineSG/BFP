const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");
const categoryController = require("../controller/categoryController");

// ? route de la homePage
router.get("/", (req, res) => {
    res.render("homePage");
});

// ? route des produits
router.get("/product", productController.getAllProduct);

router.get("/category", categoryController.getAllCategory);

// ~ le router est exporter vers l'index du server
module.exports = router;