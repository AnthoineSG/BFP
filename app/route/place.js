const { Router } = require("express");
const router = Router();
const placeController = require("../controller/placeController");

//&route pour les place
router.get("/place", placeController.getAllPlace);

module.exports = router;