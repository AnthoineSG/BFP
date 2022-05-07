const { Router } = require("express");
const router = Router();
const searchController = require("../../controller/searchController");

//& route de recherche de produit
router.get("/search", searchController.form);
router.post("/search", searchController.getIdProduct);
router.get("/searchProduct", searchController.resultSearch);

module.exports = router;