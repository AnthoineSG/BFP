require("dotenv").config();

const express = require("express");
const app = express();

const router = require("./app/router");

app.set("view engine", "ejs");
app.set("views", "./app/views");


app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
