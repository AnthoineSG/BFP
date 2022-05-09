const bcrypt = require("bcrypt"); //! appel de bcrypt pour crypter les mdp
const validator = require("validator");

const { User } = require("../models");

async function getAllUser(req, res) {
    try {
        const users = await User.findAll();
        res.render("user", { users });
    } catch (error) {
        console.error(error);
    }
}

function form(req, res) {
    res.render("userForm");
}
/**
 * Permet de verifier les informations de l'utilisateur avant de les envoyer dans la BDD
 * @param {*} req Permet de recuperé le body du formulaire
 * @param {*} res Renvois la views avec ou sans un objet d'erreur
 * @returns Previenne d'une erreur en console et surtout force l'arret de la fonction
 */
async function addUser(req, res) {
    const { firstname, lastname, email, password } = req.body; //! on recupere les data du form envoyer

    try {
        const userExist = await User.findOne({ where: { email: email }});
        if (userExist) {
            res.render("userForm", { error: "L'utilisateur existe deja !" });
            return;
        }

        if (!validator.isEmail(email)) {
            res.render("userForm", { error: "Le mail n'est pas valide !" });
            return;
        }

        if (password.length < 8) {
            res.render("userForm", { error: "Le mot de passe est trop court !" });
            return;
        }

        const salt = await bcrypt.genSalt(10); //! on genere du "sel" un nombre de caracter indechiffrable
        const hash = await bcrypt.hash(password, salt); //! on mellange le sel et le mdp
        //? le mdp est indechiffrable mais il reste comparable
        //* $2b$10$N7mFIT2CEKw/aypZ === $2b$10$N7mFIT2CEKw/aypZ

        const newUser = new User({ //^ on cree une instance pour ajouter un nouveau user
            firstname: firstname, //* on recuper sont prenom
            lastname: lastname, //* on recuper sont nom
            email: email, //* on recuper sont email
            password: hash, //* on recuper sont mdp
        });
        await newUser.save(); //& on envoie le mellange recuperer dans le formullaire vers la BDD

        res.redirect("/user"); //^ on redirect sur une autre page pour faire jolie
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getAllUser,
    form,
    addUser,
};