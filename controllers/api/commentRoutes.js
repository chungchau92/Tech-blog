const { Post } = require("../../models");

const router = require("express").Router();

router.get("/:id", async (req,res) => {
    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({ plain: true})

    res.render("comment", {post})
})

module.exports = router;