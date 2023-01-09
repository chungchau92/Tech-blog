const router = require("express").Router();
const auth = require("../utils/auth");

router.get("/", auth, async (req, res) => {
    res.render("dashbroad", {logged_in: req.session.logged_in})
})

module.exports = router