const { Router } = require("express");
const router = Router();

const mainRouter = require("./routes/main");
router.use("/", mainRouter);

const produitRouter = require("./routes/product");
router.use("/", produitRouter);

const categoryRouter = require("./routes/category");
router.use("/", categoryRouter);

const functionRouter = require("./routes/function");
router.use("/", functionRouter);

const placeRouter = require("./routes/place");
router.use("/", placeRouter);

const userRouter = require("./routes/user");
router.use("/", userRouter);

const vanillaRouter = require("./routes/vanilla");
router.use("/", vanillaRouter);

const searchRouter = require("./routes/search");
router.use("/", searchRouter);

// ~ le router est exporter vers l'index du server
module.exports = router;