const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");

router.get("/", (req, res) => {
    res.render("homePage");
});

router.get("/product", productController.getAllProduct);

module.exports = router;