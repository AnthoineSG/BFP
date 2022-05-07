const { Router } = require("express");
const router = Router();
const categoryController = require("../../controller/categoryController");

//& route des categories
router.get("/category", categoryController.getAllCategory);

module.exports = router;