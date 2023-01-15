const { Post, Comment, User } = require("../../models");

const router = require("express").Router();

const auth = require("../../utils/auth")

router.get("/:post_id", async (req,res) => {
    try {
        const postData = await Post.findOne({
            where: {
                id: req.params.post_id
            },
            include: {
                model: User
            }
        });
        
        const post = postData.get({ plain: true})
        
        const commentData = await Comment.findAll(
            {
                where: {
                    post_id: req.params.post_id
                },
                include: {
                    model: User
                }
            })
        const comments = commentData.map((comment) => {
            return comment.get({plain: true})
        })
        console.log(comments)
            
        res.render("comment", { post, comments })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/:post_id", async (req,res) => {
    try{
        const commentData = await Comment.create({...req.body, post_id: req.params.post_id, user_id: req.session.user_id})
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router;