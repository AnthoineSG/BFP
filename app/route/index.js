const express = require("express");
const router = express.Router();

const mainController = require("../controller/mainController");
const productController = require("../controller/productController");
const categoryController = require("../controller/categoryController");
const functionController = require("../controller/functionController");
const placeController = require("../controller/placeController");
const userController = require("../controller/userController");

// ? route de la homePage
router.get("/", mainController.allProduct);

// ? route des produits
router.get("/product", productController.getAllProduct);
router.get("/product/function", productController.productWithFunction);

//? route des categories
router.get("/category", categoryController.getAllCategory);

//? route pour les function
router.get("/function", functionController.getAllFunction);

//?route pour les place
router.get("/place", placeController.getAllPlace);

//? route pour les user
router.get("/user", userController.getAllUser);
router.get("/user/form", userController.form);
router.post("/user/form", userController.addUser);
// router.get("/user/form", userController.addUser);

/*

faire une route dinamique
faire un formulaire pour chercher un produit
faire une route avec du js vanilla genre des alert et prompt moche et des boucle nul genre rentre un chiffre et je laffiche x fois

se servir des session
se servir de dayjs pour la homePage et esssayer de rendre l'heure dynamique
se servire de bcrypt pour cripter les mdp en BDD
*/








// ~ le router est exporter vers l'index du server
module.exports = router;