const { Router } = require("express");
const router = Router();
const productController = require("../../controller/productController");

// & route des produits
router.get("/product", productController.getAllProduct);

router.get("/product/:id", productController.getOneProduct);

router.get("/product/sertpour/function", productController.productHasFunction);

router.get("/product/add/new", productController.form);
router.post("/product/add/new", productController.addProduct);

module.exports = router;