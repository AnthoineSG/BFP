const { User } = require("../models");

async function getAllUser(req, res) {
    const users = await User.findAll();
    res.render("user", { users });
}



function form(req, res) {
    res.render("userForm");
}
async function addUser(req, res) {
    const { firstname, lastname, email, password } = req.body;

    const newUser = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
    });
    await newUser.save();

    res.redirect("/user/form");
}



module.exports = {
    getAllUser,
    form,
    addUser,
};