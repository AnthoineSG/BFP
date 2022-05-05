const { Router } = require("express");
const router = Router();
const mainController = require("../controller/mainController");

// & route de la homePage
router.get("/", mainController.allProduct);

module.exports = router;