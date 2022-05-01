require("dotenv").config(); // ? Important de tout d'abord importer les variables d'environnement pour toute l'app

const express = require("express"); // & on importe express
const app = express(); // & on utilise express pour app

const router = require("./app/route"); // ! le router se trouve dans index mais depuis es6 plus besoin de marquer .../index

app.set("view engine", "ejs"); // ~ on dit a express d'utliliser ejs
app.set("views", "./app/views"); // ~ on set les vues ejs seront a la racine

app.use(express.static("./public")); // * les fichier satatic seront directement a la racine "/"

app.use(express.urlencoded({ extended: false }));

app.use(router);

const PORT = process.env.PORT; // ^ le port de l'application est a ecrire dans le fichier .env
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
