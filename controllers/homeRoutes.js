const router = require("express").Router();
const auth = require("../utils/auth")

router.get("/", (req,res) => {
    res.render("homepage",{logged_in: req.session.logged_in})
})

router.get("/login", (req,res) => {
    res.render("login")
})

router.get("/signUp", (req,res) => {
    res.render("signUp")
})

module.exports = router;