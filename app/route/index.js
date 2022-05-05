const { Router } = require("express");
const router = Router();

const mainRouter = require("./main");
router.use("/", mainRouter);

const produitRouter = require("./product");
router.use("/", produitRouter);

const categoryRouter = require("./category");
router.use("/", categoryRouter);

const functionRouter = require("./function");
router.use("/", functionRouter);

const placeRouter = require("./place");
router.use("/", placeRouter);

const userRouter = require("./user");
router.use("/", userRouter);

const vanillaRouter = require("./vanilla");
router.use("/", vanillaRouter);

const searchRouter = require("./search");
router.use("/", searchRouter);

// ~ le router est exporter vers l'index du server
module.exports = router;