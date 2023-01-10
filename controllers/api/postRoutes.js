const router = require("express").Router();

const { Post } = require("../../models");

const withAuth = require('../../utils/auth');

// create new post
router.post("/create", async (req,res) => {
    
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err)
    }
})

//  get all posts created
router.get("/", async (req,res) => {
    const postData = await Post.findAll()
    res.json(postData);
})

//  delete Post with ID
router.delete("/:id", async (req,res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            }
        })

        if(!postData) {
            res.status(404).json({ message: "No Post found with this id"});
            return
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err)
    }
})

// Update post with iD
router.put("/:id", async (req,res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            }
        });

        if(!postData) {
            res.status(404).json({ message: "No Post found with this id"});
            return
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;