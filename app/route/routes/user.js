const { Router } = require("express");
const router = Router();
const userController = require("../../controller/userController");

//& route pour les user
router.get("/user", userController.getAllUser);

router.get("/user/form", userController.form);
router.post("/user/form", userController.addUser);

module.exports = router;