const router = require("express").Router();
const auth = require("../utils/auth");
const { Post } = require('../models')

router.get("/", auth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            attributes: { exclude: ["content"]}
        })
        
        const posts = postData.map((post) => {
            return post.get({ plain: true })
        })
        
        res.render("dashbroad", { posts, logged_in: true})
        

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router