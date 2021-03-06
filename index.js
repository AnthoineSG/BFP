require("dotenv").config(); // ? Important de tout d'abord importer les variables d'environnement pour toute l'app

const express = require("express"); // & on importe express
const session = require("express-session");
const app = express(); // & on utilise express pour app

const router = require("./app/route"); // ! le router se trouve dans index mais depuis es6 plus besoin de marquer .../index

app.set("view engine", "ejs"); // ~ on dit a express d'utliliser ejs
app.set("views", "./app/views"); // ~ on set les vues ejs seront a la racine

app.use(express.static("./public")); // * les fichier satatic seront directement a la racine "/"

app.use(express.urlencoded({ extended: false })); //! urlencoded permet de se servir de req.body (tout se qui est dans l'url (?toto=tata....))

app.use(session({ //& on se sert des session pour appeller un cookie qui va suivre le visiteur
    secret: "secret of bfp", //* on mets un secret au piff
    resave: false,
    saveUninitialized: true,
    cookie: { //& le cookie
        secure: false, //* false = http true = https
    }
}));

app.use((req, res, next) => { //! on defini ce qui se trouve dans l'objet de session
    if (!req.session.idOfSearch) {
        req.session.idOfSearch = 0;
    }
    next();
});


app.use(router);


app.use("*", (req, res) => {
    res.render("error/404");
});

const PORT = process.env.PORT; // ^ le port de l'application est a ecrire dans le fichier .env
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
