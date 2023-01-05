const router = require("express").Router();

router.get("/", (req,res) => {
    res.render("homepage")
})

router.get("/login", (req,res) => {
    res.render("login")
})

router.get("/signUp", (req,res) => {
    res.render("signUp")
})

module.exports = router;