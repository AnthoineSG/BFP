const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");

// ? route de la homePage
router.get("/", (req, res) => {
    res.render("homePage");
});

// ? route des produits
router.get("/product", productController.getAllProduct);

// ~ le router est exporter vers l'index du server
module.exports = router;