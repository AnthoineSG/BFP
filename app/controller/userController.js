const { User } = require("../models");

async function getAllUser(req, res) {
    const users = await User.findAll();
    res.render("user", { users });
}

module.exports = {
    getAllUser,
};