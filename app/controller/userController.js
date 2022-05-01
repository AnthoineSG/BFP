const bcrypt = require("bcrypt"); //! appel de bcrypt pour crypter les mdp

const { User } = require("../models");

async function getAllUser(req, res) {
    const users = await User.findAll();
    res.render("user", { users });
}



function form(req, res) {
    res.render("userForm");
}
async function addUser(req, res) {
    const { firstname, lastname, email, password } = req.body; //! on recupere les data du form envoyer

    const newUser = new User({ //^ on cree une instance pour ajouter un nouveau user
        firstname: firstname, //* on recuper sont prenom
        lastname: lastname, //* on recuper sont nom
        email: email, //* on recuper sont email
        password: password, //* on recuper sont mdp
    });

    const salt = await bcrypt.genSalt(10); //! on genere du "sel" un nombre de caracter indechiffrable
    const hash = await bcrypt.hash(password, salt); //! on mellange le sel et le mdp

    newUser.password = hash; //! on affecte le mdp avec le mellange que l'on viens de cree
    //? le mdp est indechiffrable mais il reste comparable
    //* $2b$10$N7mFIT2CEKw/aypZ === $2b$10$N7mFIT2CEKw/aypZ

    await newUser.save(); //& on envoie le mellange recuperer dans le formullaire vers la BDD

    res.redirect("/user/form"); //^ on redirect sur une autre page pour faire jolie
}



module.exports = {
    getAllUser,
    form,
    addUser,
};