const { Router } = require("express");
const router = Router();
const vanillaController = require("../controller/vanillaController");

//& route demo js vanilla
router.get("/vanilla", vanillaController.vanilla);

module.exports = router;