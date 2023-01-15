const router = require("express").Router();
const { Post, User } = require("../models");
const auth = require("../utils/auth")

// render All posts to homepage
router.get("/", auth, async (req,res) => {
    const postData = await Post.findAll({
        include: {
            model: User
        }
    });

    const posts = postData.map((post) => {
        return post.get({plain: true} )
    })

    res.render("homepage",{ posts, logged_in: req.session.logged_in})
})

router.get("/login", (req,res) => {
    res.render("login")
})

router.get("/signUp", (req,res) => {
    res.render("signUp")
})

module.exports = router;