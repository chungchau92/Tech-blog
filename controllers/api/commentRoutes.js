const { Post, Comment } = require("../../models");

const router = require("express").Router();

router.get("/:id", async (req,res) => {

    try {
        const postData = await Post.findByPk(req.params.id,);
        
    
        const post = postData.get({ plain: true})
    
        res.render("comment", {post})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/:post_id", async (req,res) => {
    
    try{
        const commentData = await Comment.create({
            
            
        })
        
        
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;

