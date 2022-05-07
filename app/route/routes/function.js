const { Router } = require("express");
const router = Router();
const functionController = require("../../controller/functionController");

//& route pour les function
router.get("/function", functionController.getAllFunction);

module.exports = router;